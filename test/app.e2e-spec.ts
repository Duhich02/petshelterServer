import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it("/pets (GET)", () => {
    return request(app.getHttpServer()).get("/pets").expect(200).expect([]);
  });

  it("/users (GET)", () => {
    return request(app.getHttpServer()).get("/users").expect(200).expect([]);
  });
//finish
  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
  afterAll((done) => {
    app.close();
    done();
  });
});
