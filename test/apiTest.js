const request = require('supertest');

const app = require('../src/app');

describe('GET /users', () => {
    it('respond with json containing a list of all users', (done) => {
        request(app)
            .get('/api/v1/users')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});