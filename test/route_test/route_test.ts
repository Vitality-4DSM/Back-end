import { expect } from 'chai';
import { describe, it } from 'mocha';
import request from 'supertest';

describe('TESTE UNITÁRIO - POST http://localhost:3001/test/', () => {
  it('Teste POST - Deve retornar status 200', async () => {
    const res = await request('http://localhost:3001').post('/test/').send({
      string: 'string',
      number: 1,
      date: '2021-01-01',
      boolean: true
    });
    expect(res.status).to.equal(200);
  });
});

describe('TESTE UNITÁRIO - GET http://localhost:3001/test/', () => {
  it('Teste GetAll - Deve retornar status 200', async () => {
    const res = await request('http://localhost:3001').get('/test/');
    expect(res.status).to.equal(200);
  });
});

describe('TESTE UNITÁRIO - GET http://localhost:3001/test/:id', () => {
  it('Teste GetById - Deve retornar status 200', async () => {
    const res = await request('http://localhost:3001').get('/test/');
    expect(res.status).to.equal(200);
  });
});

describe('TESTE UNITÁRIO - PUT http://localhost:3001/test/', () => {
  it('Teste PUT - Deve retornar status 200', async () => {
    const res = await request('http://localhost:3001').put('/test/').send({
      id: 6,
      string: 'string_updated',
      number: 100,
      date: '2021-01-01',
      boolean: false
    });
    expect(res.status).to.equal(200);
  });
});

describe('TESTE UNITÁRIO - DELETE http://localhost:3001/test/', () => {
  it('Teste DELETE - Deve retornar status 200', async () => {
    const res = await request('http://localhost:3001').delete('/test/').send({
      string: 'string',
      number: 1,
      date: '2021-01-01',
      boolean: true
    });
    expect(res.status).to.equal(200);
  });
});
