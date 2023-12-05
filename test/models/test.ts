import { expect } from "chai";
import { Test } from "../../src/models/test";

describe("TESTE UNITÁRIO - Inicialização do model de Test", () => {
    it("Deve conter todos os atributos corretamente", () => {
        expect(Test).to.have.property("name", "test");
        expect(Test).to.have.property("tableName", "test");
        expect(Test).to.have.property("rawAttributes").to.have.property("id_test");
        expect(Test).to.have.property("rawAttributes").to.have.property("string");
        expect(Test).to.have.property("rawAttributes").to.have.property("number");
        expect(Test).to.have.property("rawAttributes").to.have.property("date");
        expect(Test).to.have.property("rawAttributes").to.have.property("boolean");
    });
});