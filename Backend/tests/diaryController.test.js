const request = require('supertest');
const app = require('../server');
const mongoose = require('mongoose');
const DiaryEntry = require('../models/DiaryEntry');
const User = require('../models/User');
const Food = require('../models/Food');

describe('Diary Controller', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  afterEach(async () => {
    await DiaryEntry.deleteMany({});
    await User.deleteMany({});
    await Food.deleteMany({});
  });

  it('should add a diary entry', async () => {
    const user = await User.create({
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123',
    });

    const food = await Food.create({
      name: 'Apple',
      calories: 52,
      protein: 0.3,
      carbs: 14,
      fat: 0.2,
    });

    const res = await request(app).post('/api/diary').send({
      user: user._id,
      food: food._id,
    });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('user');
    expect(res.body).toHaveProperty('food');
  });
});
