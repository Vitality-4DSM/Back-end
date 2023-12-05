import { expect } from "chai";
import { Estacao } from "../../src/models/estacao";

describe("TESTE UNITÁRIO - Inicialização do model de Estacao", () => {
    it("Deve conter todos os atributos corretamente", () => {
        expect(Estacao).to.have.property("name", "estacao");
        expect(Estacao).to.have.property("tableName", "estacao");
        expect(Estacao).to.have.property("rawAttributes").to.have.property("id_estacao");
        expect(Estacao).to.have.property("rawAttributes").to.have.property("identificador");
        expect(Estacao).to.have.property("rawAttributes").to.have.property("status");
        expect(Estacao).to.have.property("rawAttributes").to.have.property("latitude");
        expect(Estacao).to.have.property("rawAttributes").to.have.property("longitude");
        expect(Estacao).to.have.property("rawAttributes").to.have.property("instalacao");
    });
});