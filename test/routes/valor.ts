import { expect } from 'chai';
import { describe, it } from 'mocha';
import request from 'supertest';

describe('TESTE UNITÁRIO - Teste da rota valor', () => {
    it('Deve retorntar o status 401 para o método de POST', async () => {
        const res_post = await request('http://40.76.110.239:3001').post('/valor/').send({
            "valor": 25,
            "unixtime": 1631014800,
            "fk_parametro": 2
        });
        expect(res_post.status).to.equal(401);
    });
});

describe('TESTE UNITÁRIO - Teste da rota valor', () => {
    it('Deve retorntar o status 200 para o método de GET', async () => {
        const res_get = await request('http://40.76.110.239:3001').get('/value/');
        expect(res_get.status).to.equal(200);
    });
});