import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { LowdbAdapter } from '../src/employees/lowdb-adapter';

describe('Employees (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    // clean db
    const adapter = moduleFixture.get(LowdbAdapter);
    await adapter.cleanCollection('employees');

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/employees (GET)', async () => {
    await request(app.getHttpServer())
      .post('/employees')
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .send({
        firstname: 'Tim',
        lastname: 'Tester',
        role: 'Tester',
        department: 'CC',
        place: 'Hamburg',
        hiredOn: 2019,
      })
      .expect(201);

    const { body } = await request(app.getHttpServer())
      .get('/employees')
      .expect(200);

    expect(body.length).toBe(1);
  });
});
