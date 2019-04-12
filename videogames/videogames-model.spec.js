const db = require('../data/dbConfig.js');
const VideoGames = require('./videogames-model.js');
const request = require('supertest');
const server = require('../api/server.js')

describe('videogames model', () => {
    beforeEach(async () => {
        await db('videogames').truncate();
    });

    // making sure videogame is added
    describe('add()', () => {
        // can add videogame
        it('add videogame', async () => {
            let videogame = await VideoGames.add({ title: "BnS", genre: "MMORPG", releaseYear: "2012" });
            expect(videogame.title).toBe('BnS');
            expect(videogame.genre).toBe('MMORPG');
            expect(videogame.releaseYear).toBe('2012')
        })
        
        // status code good
        it('status code good', async () => {
            let videogame = { title: "LOL", genre: "MOBA", releaseYear: "2009" }
            const res = await request(server).post('/games').send(videogame)
            expect(res.statusCode).toBe(201)
        })
        
        // status code bad
        it('status code bad', async () => {
            let videogame = { title: "ViewtifulJoe"}
            const res = await request(server).post('/games').send(videogame)
            expect(res.statusCode).toBe(500)
        })
    })
})