import { expect } from 'chai';
import { describe, it } from 'mocha';
import request from 'supertest';

describe('TESTE UNITÁRIO - Teste da rota test', () => {
  it('Deve retornar status 200 para todos os métodos', async () => {
    const res_post = await request('http://localhost:3001').post('/test/').send({
      string: 'string',
      number: 1,
      date: '2021-01-01',
      boolean: true
    });
    expect(res_post.status).to.equal(200);
    const id_criado = res_post.body.id_test;

    const res_getAll = await request('http://localhost:3001').get('/test/');
    expect(res_getAll.status).to.equal(200);

    const res_getById = await request('http://localhost:3001').get('/test/' + id_criado);
    expect(res_getById.status).to.equal(200);

    const res_put = await request('http://localhost:3001').put('/test/').send({
      id: id_criado,
      string: 'string_updated',
      number: 100,
      date: '2021-01-01',
      boolean: false
    });
    expect(res_put.status).to.equal(200);

    const res_delete = await request('http://localhost:3001').delete('/test/' + id_criado)
    expect(res_delete.status).to.equal(200);

  });
}
);
