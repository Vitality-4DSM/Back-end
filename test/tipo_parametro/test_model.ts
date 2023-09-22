import { expect } from "chai";
import { TipoParametro } from "../../src/models/tipo_parametro";

describe("Inicialização do model de TipoParametro", () => {
    it("Deve conter todos os atributos corretamente", () => {
        expect(TipoParametro).to.have.property("name", "tipo_parametro");
        expect(TipoParametro).to.have.property("tableName", "tipo_parametro");
        expect(TipoParametro).to.have.property("rawAttributes").to.have.property("id_tipo_parametro");
        expect(TipoParametro).to.have.property("rawAttributes").to.have.property("nome");
        expect(TipoParametro).to.have.property("rawAttributes").to.have.property("unidade");
        expect(TipoParametro).to.have.property("rawAttributes").to.have.property("descricao");
        expect(TipoParametro).to.have.property("rawAttributes").to.have.property("json");
        expect(TipoParametro).to.have.property("rawAttributes").to.have.property("fator");
        expect(TipoParametro).to.have.property("rawAttributes").to.have.property("offset");
        expect(TipoParametro).to.have.property("rawAttributes").to.have.property("cadastro");
    });
});