import { expect } from "chai";
import { Usuario } from "../../src/models/usuario";

describe("TESTE UNITÁRIO - Inicialização do model de Usuario", () => {
    it("Deve conter todos os atributos corretamente", () => {
        expect(Usuario).to.have.property("name", "usuario");
        expect(Usuario).to.have.property("tableName", "usuario");
        expect(Usuario).to.have.property("rawAttributes").to.have.property("id_usuario");
        expect(Usuario).to.have.property("rawAttributes").to.have.property("nome");
        expect(Usuario).to.have.property("rawAttributes").to.have.property("email");
        expect(Usuario).to.have.property("rawAttributes").to.have.property("senha");
        expect(Usuario).to.have.property("rawAttributes").to.have.property("cadastro");
    });
});