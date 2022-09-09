const server = require("../index.js");
const supertest = require("supertest");
const requestWithSupertest = supertest(server);

describe('test the endpoint', () => {
    it('responds with a hello world JSON', async () => {
        const res = await requestWithSupertest.get("/");
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toHaveProperty('message');
    })
})

// "pretest": "cross-env NODE_ENV=test npm run migrate:reset",
// "migrate:reset": "npx sequelize-cli db:migrate:undo:all && npm run migrate",
// "migrate": "npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all"
