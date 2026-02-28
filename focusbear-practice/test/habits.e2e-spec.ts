process.env.DB_HOST = '127.0.0.1';

import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
// import * as request from 'supertest';
import request from 'supertest';
import { AppModule } from './../src/app.module';
import { HabitsService } from '../src/modules/habits/habits.service';
import { AuthGuard } from '@nestjs/passport';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

describe('HabitsController (e2e)', () => {
  let app: INestApplication;

  /*
  const mockHabitsService = {
    finaAll: jest.fn().mockResolvedValue([{ id: 1, name: 'Morning Journal' }]),
    create: jest.fn().mockImplementation((dto) => {
      return { id: 2, ...dto };
    }),
  };*/
  const mockHabitsService = {
    // Make sure this is named exactly what your controller calls!
    // If your controller calls .getHabits() or .find(), change the word 'findAll' to match it.
    findAll: jest.fn().mockResolvedValue([{ id: 1, name: 'Morning Journal' }]),

    create: jest.fn().mockImplementation((dto) => {
      return { id: 2, ...dto };
    }),
  };

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(HabitsService)
      .useValue(mockHabitsService)
      .overrideGuard(AuthGuard('jwt'))
      .useValue({ canActivate: () => true })
      .compile();

    // app = moduleFixture.createNestApplication();
    app = moduleFixture.createNestApplication<NestFastifyApplication>(
      new FastifyAdapter(),
    );
    app.useGlobalPipes(new ValidationPipe());

    await app.init();
    await app.getHttpAdapter().getInstance().ready();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('GET /habits', () => {
    it('should return 200 OK and an array of habits', () => {
      return request(app.getHttpServer())
        .get('/habits')
        .expect(200)
        .expect([{ id: 1, name: 'Morning Journal' }]);
    });
  });

  describe('POST /habits', () => {
    it('should return 201 Created when sending valid data', () => {
      return request(app.getHttpServer())
        .post('/habits')
        .send({ name: 'Drink Water' })
        .expect(201)
        .expect({ id: 2, name: 'Drink Water' });
    });

    it('should return 400 Bad Request if validation fails (empty name)', () => {
      return request(app.getHttpServer())
        .post('/habits')
        .send({ name: '' })
        .expect(400);
    });
  });
});
