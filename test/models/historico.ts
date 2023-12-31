import { expect } from "chai";
import { HistoricoAlerta } from "../../src/models/historico_alerta";

describe("TESTE UNITÁRIO - Inicialização do model de HistoricoAlerta", () => {
    it("Deve conter todos os atributos corretamente", () => {
        expect(HistoricoAlerta).to.have.property("name", "historico_alerta");
        expect(HistoricoAlerta).to.have.property("tableName", "historico_alerta");
        expect(HistoricoAlerta).to.have.property("rawAttributes").to.have.property("id_historico");
        expect(HistoricoAlerta).to.have.property("rawAttributes").to.have.property("fk_alerta");
        expect(HistoricoAlerta).to.have.property("rawAttributes").to.have.property("fk_valor");
    });
});