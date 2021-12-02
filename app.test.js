//supertest
'use strict';
const request = require('supertest');
const app = require('./app');

describe('Testing the service',() => {
    test('GET /home',async (done) => {
        const response = await request(app)
            .get('/home');
            expect(response.statusCode).toBe(200);
            done();
    });
});