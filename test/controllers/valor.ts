import { ValorController } from "../../src/controllers/valor";
import { expect } from "chai";

describe('TESTE UNITÁRIO - Inicialização do controller de Valor', () => {
    it('Deve conter todos os atributos corretamente', () => {
        expect(ValorController).to.be.an('function');
        expect(ValorController.prototype.create).to.be.an('function');
        expect(ValorController.prototype.getAll).to.be.an('function');
        expect(ValorController.prototype.getById).to.be.an('function');
        expect(ValorController.prototype.update).to.be.an('function');
        expect(ValorController.prototype.delete).to.be.an('function');
    });
});