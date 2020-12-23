'use strict';

const { app, database, factory, request } = require('../../test_helper');

describe('authors endpoints', () => {
  const db = database;

  beforeEach(async () => {
    await db.sequelize.sync({ force: true });
  });

  afterAll(async () => {
    await db.sequelize.close();
  });

  it('returns an array of authors', async () => {
    const authors = await factory.createMany('Author', 5);
    const rsp = await request(app).get('/authors');

    expect(rsp.statusCode).toEqual(200);
    expect(rsp.body.length).toEqual(5);
  });

  it('returns an author', async () => {
    const author = await factory.create('Author');
    const rsp = await request(app).get(`/authors/${author.id}`);

    expect(rsp.statusCode).toEqual(200);
    expect(rsp.body.id).toEqual(author.id);
  });

  it('returns an error message', async () => {
    const rsp = await request(app).get(`/authors/1`);

    expect(rsp.statusCode).toEqual(404);
    expect(rsp.body.message).toEqual('No author found where id = 1');
  });
});
