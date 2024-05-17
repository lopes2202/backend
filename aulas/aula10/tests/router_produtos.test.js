
const supertest = require('supertest');

const app = require('../app');

const req = supertest(app);

let id = null;

 describe("API Loja Virtual - Produtos", () => {
    /* test("deve retornar 201 e JSON no POST /produtos", async () => {
        const res = await req.post('/produtos').send({nome: "Morango", preco: 10});
        expect(res.status).toBe(201);
        expect(res.type).toBe("application/json"); 
    }); */ 

      test("Deve retornar 422 e JSON no POST /produtos", async() =>{
        const res = await req.post("/produtos").send({});
        expect(res.status).toBe(422);
        expect(res.type).toBe("application/json")
      })
      test("Deve retornar 200 e JSON no GET /produtos", async() => {
        const res = await req.get("/produtos")
        expect(res.status).toBe(200);
        expect(res.type).toBe("application/json")
        if(res.body.length > 0) {
          id = res.body[0]._id.toString();
        }
      });
      test("Deve retornar 200 e JSON no GET /produtos/id", async() => {
        const res = await req.get(`/produtos/${id}`);
        expect(res.status).toBe(200);
        expect(res.type).toBe("application/json");
      });
      test("Deve retornar 404 e JSON no GET", async() => {
        const res = await req.get('/produtos/663ccfe0e2ec7e07ffc9b063');
        expect(res.status).toBe(404);
        expect(res.type).toBe("application/json");
      })
      test('Deve retornar 200 e um JSON no put /produtos/id', async () => {
        const res = await req.put(`/produtos/${id}`).send({nome: "Banana Nanica", preco: 7.0});
        expect(res.status).toBe(200);
        expect(res.type).toBe("application/json");
      })
    });
