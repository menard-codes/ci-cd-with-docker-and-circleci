const server = require("../main.js");
const supertest = require("supertest");
const request = supertest(server);

describe('test the endpoint', () => {
    it('responds with a hello world JSON', async () => {
        const res = await request.get("/");
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toEqual('goodbye world!');
    })
})
