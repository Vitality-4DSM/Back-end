import { expect } from "chai";
import { describe, it } from "mocha";
import request from "supertest";

describe("TESTE UNITÁRIO - Teste da rota parametro", () => {
    it("Deve retorntar o status 401 para o método de POST", async () => {
        const res_post = await request("http://localhost:3001").post("/parameter/").send({
            "fk_estacao": 1,
            "fk_tipo_parametro": 1
          }
          );
        expect(res_post.status).to.equal(401);
    });
});

describe("TESTE UNITÁRIO - Teste da rota parametro", () => {
    it("Deve retorntar o status 200 para o método de GET", async () => {
        const res_get = await request("http://localhost:3001").get("/parameter/");
        expect(res_get.status).to.equal(401);
    });
});