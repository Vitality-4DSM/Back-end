import { ParametroController } from "../../src/controllers/parametro";
import { expect } from "chai";


describe('TESTE UNITÁRIO - Inicialização do controller de Parametro', () => {
    it('Deve conter todos os atributos corretamente', () => {
        expect(ParametroController).to.be.an('function');
        expect(ParametroController.prototype.create).to.be.an('function');
        expect(ParametroController.prototype.getAll).to.be.an('function');
        expect(ParametroController.prototype.getById).to.be.an('function');
        expect(ParametroController.prototype.update).to.be.an('function');
        expect(ParametroController.prototype.delete).to.be.an('function');
    });
});