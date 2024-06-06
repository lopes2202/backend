const supertest = require('supertest');

const app = require('../app');

const request = supertest(app);

test("Deve retornar o status 201 e o contéudo do tipo JSON", async function(){
    const response = await request.post('/produtos').send({nome: "uva", preco: 20.00})
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id', 1);
    expect(response.body).toHaveProperty('nome', "uva");
    expect(response.body).toHaveProperty('preco', 20.00);
    expect(response.headers['content-type']).toMatch(/json/);
})

test("Deve retornar o status 200 com um conteúdo do tipo JSON", async function(){
    const response = await request.get('/produtos/1');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.headers['content-type']).toMatch(/json/);
})

test("Deve retornar o status 404 e um conteúdo do tipo JSON", async function(){
    const response = await request.get('/produtos/100')
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('msg', "Produto não encontrado");
    expect(response.headers['content-type']).toMatch(/json/);
})

test("Deve retornar o status 422 e um conteúdo do tipo JSON", async function(){
    const response = await request.post('/produtos')
    expect(response.status).toBe(422);
    expect(response.body).toHaveProperty('msg', "Nome e preço do produtos são obrigatórios");
    expect(response.headers).toMatch(/json/);
})

test("Deve retornar o status 200 e um conteúdo do tipo JSON", async function(){
    const response = await request.put('/produtos/1')
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id", 1);
    expect(response.body).toHaveProperty("preco", 18.00);
    expect(response.body).toHaveProperty("Nome", "Uva verde");
    expect(response.headers).toMatch(/json/);
})

test("Deve retornar o status 404 e um conteúdo do tipo JSON", async function(){
    const response = await request.put("/produtos/100");
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('msg', "Produto não encontrado");
    expect(response.headers).toMatch(/json/);
})

test("Deve retornar o status 204 e sem conteúdo"), async function(){
    const response = await request.delete("/produtos/1");
    expect(response.status).toBe(204);
    expect(response.type).toBe('')
}

test("Deve retornar o status 404 e um conteúdo do tipo JSON", async function(){
    const response = await request.delete('/produtos/100')
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty("msg", "Produto não encontrado");
    expect(response.headers).toMatch(/json/);
})