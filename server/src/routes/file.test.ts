import { app } from '../app';
import { File } from 'models/file';
import request from 'supertest';
import fs from 'fs';
import path from 'path';



// describe('File routing', () => {
//   it('has a route handler listening to /api/videos/upload for post requests', async () => {
//     const filePath = path.resolve(__dirname, '../../assets/forTestOnly.mp4');
//     // const file = fs.readFileSync(filePath)

//       const response = await request(app)
//         .post('/api/videos/upload')
//         .attach('file', filePath)
//         .expect(200)



//     // const response = await request(app).post('/api/tickets').send({});
  
//     // expect(response.status).not.toEqual(404);
//   });
// });



// it('has a route handler listening to /api/tickets for post requests', async () => {
//   const response = await request(app).post('/api/tickets').send({});

//   expect(response.status).not.toEqual(404);
// });

// it('can only be accessed if the user is signed in', async () => {
//   await request(app).post('/api/tickets').send({}).expect(401);
// });

// it('returns a status other than 401 if the user is signed in', async () => {
//   const response = await request(app)
//     .post('/api/tickets')
//     .set('Cookie', global.signin())
//     .send({});

//   expect(response.status).not.toEqual(401);
// });

// it('returns an error if an invalid title is provided', async () => {
//   await request(app)
//     .post('/api/tickets')
//     .set('Cookie', global.signin())
//     .send({
//       title: '',
//       price: 10,
//     })
//     .expect(400);

//   await request(app)
//     .post('/api/tickets')
//     .set('Cookie', global.signin())
//     .send({
//       price: 10,
//     })
//     .expect(400);
// });

// it('returns an error if an invalid price is provided', async () => {
//   await request(app)
//     .post('/api/tickets')
//     .set('Cookie', global.signin())
//     .send({
//       title: 'asldkjf',
//       price: -10,
//     })
//     .expect(400);

//   await request(app)
//     .post('/api/tickets')
//     .set('Cookie', global.signin())
//     .send({
//       title: 'laskdfj',
//     })
//     .expect(400);
// });

// it('creates a ticket with valid inputs', async () => {
//   let tickets = await Ticket.find({});
//   expect(tickets.length).toEqual(0);

//   const title = 'asldkfj';

//   await request(app)
//     .post('/api/tickets')
//     .set('Cookie', global.signin())
//     .send({
//       title,
//       price: 20,
//     })
//     .expect(201);

//   tickets = await Ticket.find({});
//   expect(tickets.length).toEqual(1);
//   expect(tickets[0].price).toEqual(20);
//   expect(tickets[0].title).toEqual(title);
// });

// it('publishes an event', async () => {
//   const title = 'asldkfj';

//   await request(app)
//     .post('/api/tickets')
//     .set('Cookie', global.signin())
//     .send({
//       title,
//       price: 20,
//     })
//     .expect(201);

//   expect(natsWrapper.client.publish).toHaveBeenCalled();
// });
