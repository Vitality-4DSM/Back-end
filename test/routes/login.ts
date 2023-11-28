import { expect } from 'chai';
import { describe, it } from 'mocha';
import request from 'supertest';

describe('TESTE UNITÁRIO - POST http://40.76.110.239:3001/login/', () => {
    it('Teste POST - Deve retornar status 200 e retornar o token', async () => {
        const res = await request('http://40.76.110.239:3001').post('/login/').send({
            email: 'admin@gmail',
            senha: '$6$password$XU0/ejxmLPT5oSQpLKu2aTktASaZeciL4f.Oa1JOUziohCUjbT9.AbHpRLJZDbt9Jnn/uU6PSRn7fasCwRK8M0'
        });
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('token');
        const token = res.body.token;
    });
});