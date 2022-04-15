import Busboy from 'busboy';
import express from 'express';
import fs from 'fs';
import util from 'util';
import path from 'path';
import { StatusCodes } from 'http-status-codes';
import { File } from '../models/file';
import thumbsupply from 'thumbsupply';

const { OK, PARTIAL_CONTENT, NOT_FOUND } = StatusCodes;

const router = express.Router();
const stat = util.promisify(fs.stat);
const cp = util.promisify(fs.copyFile);
const del = util.promisify(fs.unlink);

const CHUNK_SIZE = 10 ** 6;

router.get('/videos', async (req, res) => {
  const list = await File.find({});

  res.status(OK).json({ list });
});

router.post('/videos/upload', (req, res) => {
  const busboy = Busboy({
    headers: req.headers,
  });

  busboy.on('file', async (fieldname, file, { filename, mimeType }) => {
    console.log({ filename, mimeType }, '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    const fileName = `${Date.now()}-${filename}`;
    const filePath = path.resolve(__dirname, `../../assets/${fileName}`);
    file.on('end', async () => {
      const { size } = await stat(filePath);
      let thumbnail= 'test';
      try {
        const thumb = await thumbsupply.generateThumbnail(filePath);
        const thumbData = path.parse(thumb);
        const fileData = path.parse(filePath);
        thumbnail = `${fileData.name}${thumbData.ext}`
        await cp(thumb, path.resolve(__dirname, `../../public/${thumbnail}`));
        await del(thumb);
      } catch (err) {
        console.log(err);
      }

      const file = File.build({
        fileName,
        originName: filename,
        thumbnail,
        mimeType,
        size,
      });


      console.log(file)
      await file.save();
      console.log('File [' + fieldname + '] Finished');
      console.log(file);
    });
    const outStream = fs.createWriteStream(filePath);
    file.pipe(outStream);
  });
  busboy.on('finish', () => {
    res.writeHead(OK, {
      Connection: 'close',
    });
    res.end();
  });
  return req.pipe(busboy);
});

router.get('/videos/:id', async (req, res) => {
  const { id } = req.params;
  const fileEntity = await File.findById(id);
  if (!fileEntity) {
    return res.status(NOT_FOUND).json({ message: 'Not Found' });
  }
  const filePath = path.resolve(__dirname, `../../assets/${fileEntity.fileName}`);
  const range = req.headers.range;
  if (range) {
    const parts = range.replace(/bytes=/, '').split('-');
    const start = parseInt(parts[0], 10);
    const end = Math.min(start + CHUNK_SIZE, fileEntity.size - 1);
    const contentLength = end - start + 1;
    const file = fs.createReadStream(filePath, { start, end });
    const head = {
      'Content-Range': `bytes ${start}-${end}/${fileEntity.size}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': contentLength,
      'Content-Type': fileEntity.mimeType,
    };
    res.writeHead(PARTIAL_CONTENT, head);
    file.pipe(res);
  } else {
    const head = {
      'Content-Length': fileEntity.size,
      'Content-Type': fileEntity.mimeType,
    };
    res.writeHead(OK, head);
    fs.createReadStream(filePath).pipe(res);
  }
});

export { router as fileRouter };
