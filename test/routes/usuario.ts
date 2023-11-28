import { expect } from 'chai';
import { describe, it } from 'mocha';
import request from 'supertest';

describe('TESTE UNITÁRIO - Teste da rota usuario', () => {
    it('Deve retorntar o status 401 para o método de POST', async () => {
        const res_post = await request('http://40.76.110.239:3001').post('/user/').send({
            "nome": "Maria Santos",
            "cargo": "Analista",
            "email": "maria.santos@example.com",
            "senha": "senha456",
            "cadastro": "2023-08-15T14:30:00Z"
        });
        expect(res_post.status).to.equal(401);
    });
});

describe('TESTE UNITÁRIO - Teste da rota usuario', () => {
    it('Deve retorntar o status 200 para o método de GET', async () => {
        const res_get = await request('http://40.76.110.239:3001').get('/user/');
        expect(res_get.status).to.equal(401);
    });
});
