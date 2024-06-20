const request = require('supertest');
const app = require('../server');

describe('Food Controller', () => {
  it('should search for food', async () => {
    const res = await request(app).get('/api/food/search').query({
      query: 'apple',
    });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('parsed');
  });
});
