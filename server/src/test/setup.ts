import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

let mongo: MongoMemoryServer;
const opts = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};
beforeAll(async () => {
  // process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

  mongo = new MongoMemoryServer();
  await mongo.start();

  const mongoUri = mongo.getUri();

  await mongoose.connect(mongoUri);
});

beforeEach(async () => {
  jest.clearAllMocks();

  const collections = await mongoose.connection.db.collections();


  // for await (const collection of collections) {
  //   console.log(collection, 'cccccccccccccccc')

  //   await collection.deleteMany({});
  // }
  // for (let collection of collections) {
  //   console.log(collection, 'cccccccccccccccc')

  //   await collection.deleteMany({});
  // }
});

afterAll(async () => {
  jest.setTimeout(50000);

  await mongo.stop();
  await mongoose.connection.close();
});
