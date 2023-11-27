import { UsuarioController } from "../../src/controllers/usuario";
import { expect } from "chai";

describe('TESTE UNITÁRIO - Inicialização do controller de Usuario', () => {
    it('Deve conter todos os atributos corretamente', () => {
        expect(UsuarioController).to.be.an('function');
        expect(UsuarioController.prototype.create).to.be.an('function');
        expect(UsuarioController.prototype.getAll).to.be.an('function');
        expect(UsuarioController.prototype.getById).to.be.an('function');
        expect(UsuarioController.prototype.update).to.be.an('function');
        expect(UsuarioController.prototype.delete).to.be.an('function');
    });
});