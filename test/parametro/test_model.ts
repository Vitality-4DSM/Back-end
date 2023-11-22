import { expect } from "chai";
import { Parametro } from "../../src/models/parametro";

describe("TESTE UNITÁRIO - Inicialização do model de Parametro", () => {
    it("Deve conter todos os atributos corretamente", () => {
        expect(Parametro).to.have.property("name", "parametro");
        expect(Parametro).to.have.property("tableName", "parametro");
        expect(Parametro).to.have.property("rawAttributes").to.have.property("id_parametro");
        expect(Parametro).to.have.property("rawAttributes").to.have.property("fk_estacao");
        expect(Parametro).to.have.property("rawAttributes").to.have.property("fk_tipo_parametro");
    });
});