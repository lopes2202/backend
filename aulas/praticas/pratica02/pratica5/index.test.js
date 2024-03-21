const supertest = require('supertest');

const app = require('./index')

const request = supertest(app);

test("Deve retornar o status 200 e um conteudo do tipo JSON", async function(){
    const response = await request.get('/produtos')
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
});

test("Deve retornar o status 200 e um conteudo do tipo JSON", async function(){
    const response = await request.get('/produtos/1')
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
})

test("Deve retornar o status 404 e um conteudo do tipo JSON", async function(){
    const response = await request.get('/produtos/100')
    expect(response.status).toBe(404);
    expect(response.headers['content-type']).toMatch(/json/);
})

test("Deve retornar o status 201 e um conteúdo do tipo JSON", async function(){
    const response = await request.post('/produtos').send({nome: "uva", preco: 20.00})
    expect(response.status).toBe(201);
    expect(response.headers['content-type']).toMatch(/json/);
})

test("Deve retornar o status 422 e um conteúdo do tipo JSON", async function(){
    const response = await request.post('/produtos')
    expect(response.status).toBe(422);
    expect(response.headers['content-type']).toMatch(/json/);
})

test("Deve retornar o status 200 e um conteúdo do tipo JSON", async function(){
    const response = await request.post('/produtos/1').send({nome: "uva verde", preco: 18.00})
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
})

test("Deve retornar o status 204 e sem conteúdo", async function(){
    const response = await request.delete("/produtos/1")
    expect(response.status).toBe(204);
})

test("Deve retornar o status 404 e um conteúdo do tipo JSON", async function(){
    const response = await request.delete("/produtos/100")
    expect(response.status).toBe(404);
    expect(response.headers['content-type']).toMatch(/json/);
})