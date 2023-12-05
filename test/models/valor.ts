import { expect } from "chai";
import { Valor } from "../../src/models/valor";

describe("TESTE UNITÁRIO - Inicialização do model de Valor", () => {
    it("Deve conter todos os atributos corretamente", () => {
        expect(Valor).to.have.property("name", "valor");
        expect(Valor).to.have.property("tableName", "valor");
        expect(Valor).to.have.property("rawAttributes").to.have.property("id_valor");
        expect(Valor).to.have.property("rawAttributes").to.have.property("fk_parametro");
        expect(Valor).to.have.property("rawAttributes").to.have.property("valor");
        expect(Valor).to.have.property("rawAttributes").to.have.property("unixtime");
    });
});