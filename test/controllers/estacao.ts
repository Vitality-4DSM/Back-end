import { EstacaoController } from "../../src/controllers/estacao";
import { expect } from "chai";

describe('TESTE UNITÁRIO - Inicialização do controller de Estacao', () => {
    it('Deve conter todos os atributos corretamente', () => {
        expect(EstacaoController).to.be.an('function');
        expect(EstacaoController.prototype.create).to.be.an('function');
        expect(EstacaoController.prototype.getAll).to.be.an('function');
        expect(EstacaoController.prototype.getById).to.be.an('function');
        expect(EstacaoController.prototype.update).to.be.an('function');
        expect(EstacaoController.prototype.delete).to.be.an('function');
    });
}
);