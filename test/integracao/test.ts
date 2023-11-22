import { expect } from 'chai';
import { describe, it } from 'mocha';
import request from 'supertest';

// TESTE DE LOGIN PELA ROTA
// TESTAR SE ESTÁ RETORTANDO O TOKEN

describe('TESTE UNITÁRIO - POST http://localhost:3001/login/', () => {
    it('Teste POST - Deve retornar status 200 e retornar o token', async () => {
        const res = await request('http://localhost:3001').post('/login/').send({
            email: 'admin@gmail',
            senha: '$6$password$XU0/ejxmLPT5oSQpLKu2aTktASaZeciL4f.Oa1JOUziohCUjbT9.AbHpRLJZDbt9Jnn/uU6PSRn7fasCwRK8M0'
        });
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('token');
        const token = res.body.token;
        console.log(token);

    }
    );
    // it("Teste POST - Deve retornar status 200 e criar um novo usuário no banco de dados", async () => {
    //     const res = await request('http://localhost:3001').post('/user/').send({
    //         nome: "Maria Santos",
    //         cargo: "Analista",
    //         email: "maria.santos@example.com",
    //         senha: "senha456",
    //         cadastro: "2023-08-15T14:30:00Z",
    //     },
    //     );
    //     console.log(res.body);
    //     expect(res.status).to.equal(200);
    // }
    // );
}
);