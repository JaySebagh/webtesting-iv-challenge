const request = require('supertest');
const server = require('./server.js')

describe('server.js', () => {
    describe('GET /', () => {
        // using superjest to check for status code 200 on '/videogames'
        it('Superjest res with 200 OK', () => {
            return request(server)
                .get('/games')
                .expect(200);
        })

        // using Jest to check if JSON is returned on '/videogames'
        it('Jest JSON', () => {
            return request(server)
                .get('/games')
                .then(res => {
                    expect(res.type).toBe('application/json')
                })
        })

        // using Jest to check an array is returned on '/videogames'
        it('return', () => {
            return request(server)
            .get('/games')
            .then(res => {
                expect(res.body).toEqual(expect.objectContaining([]));
            })
        })
    })
})