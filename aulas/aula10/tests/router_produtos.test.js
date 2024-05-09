const supertest = require('supertest');

const app = require('../app')

const req = supertest(app);

describe("API Loja Virtual - Produtos", () => {
    test("Deve retornar 201 e JSON no POST /produtos",
      async () => {
        const res = await req.post("/produtos").send({
          nome: "banana",
          preco: 12.0,
        });
        expect(res.status).toBe(201);
        expect(res.type).toBe("application/json");
    });
  });