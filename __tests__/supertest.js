const request = require('supertest');

const server = 'http://localhost:3000';

describe('Route integration', () => {
  describe('/', () => {
    describe('GET', () => {
      it('responds with 200 status and text/html content type', async () => {
        const response = await request(server).get('/');
        return response.expect('Content-Type', /text\/html/).expect(200);
      })
    })
  });

  // describe('/user', () => {
  //   describe('POST', () => {})
  // });

  // describe('/user', () => {
  //   describe('GET', () => {})
  // });

  // describe('/app', () => {
  //   describe('POST', () => {})
  // });
})