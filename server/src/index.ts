import { app } from './app';
import mongoose from 'mongoose';

const { PORT = '5000' } = process.env;

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Connected to MongoDb');
  } catch (err) {
    console.error(err);
    throw err;
  }

  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
};

start();
