import { TestController } from "../../src/controllers/test";
import { expect } from "chai";

describe('TESTE UNITÁRIO - Inicialização do controller de Test', () => {
    it('Deve conter todos os atributos corretamente', () => {
        expect(TestController).to.be.an('function');
        expect(TestController.prototype.create).to.be.an('function');
        expect(TestController.prototype.getAll).to.be.an('function');
        expect(TestController.prototype.getById).to.be.an('function');
        expect(TestController.prototype.update).to.be.an('function');
        expect(TestController.prototype.delete).to.be.an('function');
    }
    );
}
);