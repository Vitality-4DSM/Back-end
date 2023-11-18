import { expect } from 'chai';
import { Alerta } from '../../src/models/alerta';

describe('Inicialização do model de Alerta', () => {
    it('Deve conter todos os atributos corretamente', () => {
        expect(Alerta).to.have.property('name', 'alerta');
        expect(Alerta).to.have.property('tableName', 'alerta');
        expect(Alerta).to.have.property('rawAttributes').to.have.property('id_alerta');
        expect(Alerta).to.have.property('rawAttributes').to.have.property('NomeDaEstação');
        expect(Alerta).to.have.property('rawAttributes').to.have.property('TipoDeAlerta');
        expect(Alerta).to.have.property('rawAttributes').to.have.property('valor');
    });
});