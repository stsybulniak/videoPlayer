import { app } from '../app';
import { File } from '../models/file';
import request from 'supertest';
import fs from 'fs';
import path from 'path';
import util from 'util';

const del = util.promisify(fs.unlink);

describe('File routing', () => {
  jest.setTimeout(35000);

  it('has a route handler listening to /api/videos/upload for post requests', async () => {
    const filePath = path.resolve(__dirname, '../../__mocks__/forTestOnly.mp4');

   await request(app).post('/api/videos/upload').attach('file', filePath).expect(200);

    const item = await File.findOne({ originName: 'forTestOnly.mp4' });

    //todo copy files for special test directories
    const savedPath = path.resolve(__dirname, `../../assets/${item?.fileName}`);
    const thumpPath = path.resolve(__dirname, `../../public/${item?.thumbnail}`);

    expect(fs.existsSync(savedPath)).toBe(true);
    expect(fs.existsSync(thumpPath)).toBe(true);
    await del(savedPath);
    await del(thumpPath);
  });
});
