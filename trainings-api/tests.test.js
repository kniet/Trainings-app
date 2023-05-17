const server = require('./index.js');
const supertest = require('supertest');
const requestWithSupertest = supertest(server);

describe('trainings Endpoints', () => {

    it('GET /trainings should show all users', async () => {
      const res = await requestWithSupertest.get('/trainings');
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toEqual(expect.any(Array));
    });
  
  });
