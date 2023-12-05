import { HistoricoAlertaController } from "../../src/controllers/historico_alerta";
import { expect } from "chai";

describe('TESTE UNITÁRIO - Inicialização do controller de HistoricoAlerta', () => {
    it('Deve conter todos os atributos corretamente', () => {
        expect(HistoricoAlertaController).to.be.an('function');
        expect(HistoricoAlertaController.prototype.create).to.be.an('function');
        expect(HistoricoAlertaController.prototype.getAll).to.be.an('function');
        expect(HistoricoAlertaController.prototype.getById).to.be.an('function');
        expect(HistoricoAlertaController.prototype.update).to.be.an('function');
        expect(HistoricoAlertaController.prototype.delete).to.be.an('function');
    });
});