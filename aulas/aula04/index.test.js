const supertest = require('supertest');

const app = require('./index');

const request = supertest(app);

test("Deve retornar 200 no get /", async function() {
    const response = await request.get("/");
    expect(response.status).toBe(200);
});