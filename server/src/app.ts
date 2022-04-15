import express, { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { fileRouter } from './routes/file';

const { BAD_REQUEST, NOT_FOUND } = StatusCodes;

const app = express();

app.use('/api/static', express.static('public'))

app.use('/api', fileRouter);

app.all('*', async (req, res) => {
  res.status(NOT_FOUND).send({
    errors: [{ message: 'Not found' }],
  });
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(BAD_REQUEST).send({
    errors: [{ message: err?.message || 'Something went wrong!' }],
  });
});

export { app };
