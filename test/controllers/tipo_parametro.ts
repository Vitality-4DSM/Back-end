import { TipoParametroController } from "../../src/controllers/tipo_parametro";
import { expect } from "chai";


describe('TESTE UNITÁRIO - Inicialização do controller de TipoParametro', () => {
    it('Deve conter todos os atributos corretamente', () => {
        expect(TipoParametroController).to.be.an('function');
        expect(TipoParametroController.prototype.create).to.be.an('function');
        expect(TipoParametroController.prototype.getAll).to.be.an('function');
        expect(TipoParametroController.prototype.getById).to.be.an('function');
        expect(TipoParametroController.prototype.update).to.be.an('function');
        expect(TipoParametroController.prototype.delete).to.be.an('function');
    });
});