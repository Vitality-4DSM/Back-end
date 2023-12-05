import { expect } from "chai";
import { describe, it } from "mocha";
import request from "supertest";

describe("TESTE UNITÁRIO - Teste da rota estacao", () => {
    it("Deve retorntar o status 401 para o método de POST", async () => {
        const res_post = await request("http://localhost:3001").post("/station/").send({
            "identificador": "EstacaoA",
            "status": "Ativa",
            "latitude": 407128,
            "longitude": 740060,
            "instalacao": "2023-09-07T14:00:00Z"
        });
        expect(res_post.status).to.equal(401);
    });
});

describe("TESTE UNITÁRIO - Teste da rota estacao", () => {
    it("Deve retorntar o status 401 para o método de GET", async () => {
        const res_get = await request("http://localhost:3001").get("/station/");
        expect(res_get.status).to.equal(401);
    });
});