'use strict';

const { app, database, factory, request } = require('../../test_helper');

describe('photos endpoints', () => {
  const db = database;

  beforeEach(async () => {
    await db.sequelize.sync({ force: true });
  });

  afterAll(async () => {
    await db.sequelize.close();
  });

  it('returns an array of photos', async () => {
    const photos = await factory.createMany('Photo', 5);
    const rsp = await request(app).get('/photos');

    expect(rsp.statusCode).toEqual(200);
    expect(rsp.body.length).toEqual(5);
  });

  it('returns an photo', async () => {
    const photo = await factory.create('Photo');
    const rsp = await request(app).get(`/photos/${photo.id}`);

    expect(rsp.statusCode).toEqual(200);
    expect(rsp.body.id).toEqual(photo.id);
  });

  it('returns an error message', async () => {
    const rsp = await request(app).get(`/photos/1`);

    expect(rsp.statusCode).toEqual(404);
    expect(rsp.body.message).toEqual('No photo found where id = 1');
  });
});
