import { expect } from 'chai';
import { describe, it } from 'mocha';
import request from 'supertest';

describe('TESTE UNITÁRIO - Teste da rota tipo_parametro', () => {
    it('Deve retorntar o status 401 para o método de POST', async () => {
        const res_post = await request('http://localhost:3001').post('/typeparameter/').send({
            "nome": "Temperatura",
            "unidade": "°C",
            "descricao": "Medição da temperatura ambiente",
            "json": {
                "config": "valor1",
                "config2": "valor2"
            },
            "fator": 1.0,
            "offset": 0,
            "cadastro": "2023-09-07T08:30:00Z"
        });
        expect(res_post.status).to.equal(401);
    });
});

describe('TESTE UNITÁRIO - Teste da rota tipo_parametro', () => {
    it('Deve retorntar o status 200 para o método de GET', async () => {
        const res_get = await request('http://localhost:3001').get('/typeparameter/');
        expect(res_get.status).to.equal(401);
    });
});