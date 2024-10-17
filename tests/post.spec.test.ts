import request from 'supertest';
import app from '../app';
import mongoose from 'mongoose';

// Conectar a MongoDB antes de todas las pruebas
beforeAll(async () => {
  const uri = 'mongodb://localhost:27017/posts-api-test';
  await mongoose.connect(uri);
});

// Desconectar de MongoDB después de todas las pruebas
afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

describe('Posts API', () => {
  it('should create a new post', async () => {
    const response = await request(app)
      .post('/api/posts')
      .send({ title: 'Test Post', text: 'This is a test post', author: 'Author1' });
    
    expect(response.status).toBe(201);
    expect(response.body.title).toBe('Test Post');
  });

  it('should return all posts', async () => {
    const response = await request(app).get('/api/posts');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should return a post by ID', async () => {
    const postResponse = await request(app)
      .post('/api/posts')
      .send({ title: 'Test Post 2', text: 'Another test post', author: 'Author2' });

    const response = await request(app).get(`/api/posts/${postResponse.body._id}`);
    expect(response.status).toBe(200);
    expect(response.body.title).toBe('Test Post 2');
  });

  it('should update a post by ID', async () => {
    const postResponse = await request(app)
      .post('/api/posts')
      .send({ title: 'Update Test', text: 'Post to update', author: 'Author3' });

    const response = await request(app)
      .patch(`/api/posts/${postResponse.body._id}`)
      .send({ title: 'Updated Post' });

    expect(response.status).toBe(200);
    expect(response.body.title).toBe('Updated Post');
  });

  it('should delete a post by ID', async () => {
    const postResponse = await request(app)
      .post('/api/posts')
      .send({ title: 'Delete Test', text: 'Post to delete', author: 'Author4' });

    const response = await request(app).delete(`/api/posts/${postResponse.body._id}`);
    expect(response.status).toBe(204);
  });
});
