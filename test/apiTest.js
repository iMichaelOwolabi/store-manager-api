const request = require('supertest');

const app = require('../src/app');

// Test get all users endpoint
describe('GET /users', () => {
    it('respond with json containing a list of all users', (done) => {
        request(app)
            .get('/api/v1/users')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

// Testing get a specific user endpoint
describe('GET /user/:id', () => {
    it('respond with json containing a single user', (done) => {
        request(app)
            .get('/api/v1/users/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

// Testing error 404 on user endpoint
describe('GET /user/:id', () => {
    it('respond with json user not found', (done) => {
        request(app)
            .get('/api/v1/users/0')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404) //expecting HTTP status code
            .expect('"The specified user does not exist on this platform"') // expecting content value
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});