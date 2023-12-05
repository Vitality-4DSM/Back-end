import { AlertaController } from '../../src/controllers/alerta';
import { expect } from 'chai';


describe('TESTE UNITÁRIO - Inicialização do controller de Alerta', () => {
    it('Deve conter todos os atributos corretamente', () => {
        expect(AlertaController).to.be.an('function');
        expect(AlertaController.prototype.create).to.be.an('function');
        expect(AlertaController.prototype.getAll).to.be.an('function');
        expect(AlertaController.prototype.getById).to.be.an('function');
        expect(AlertaController.prototype.update).to.be.an('function');
        expect(AlertaController.prototype.delete).to.be.an('function');
    });
}
);