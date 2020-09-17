import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

jest.mock('../src/employees/listeners/erp.listener');
jest.mock('../src/employees/listeners/profiler.listener');

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    // use test db
    // clean db
    // insert test data

    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it.skip('GET /employees', () => {
    return request(app.getHttpServer())
      .get('/employees')
      .expect(200)
      .expect([
        {
          firstname: 'Kevin',
          lastname: 'Kotlin',
          role: 'Software Engineer',
          department: 'Cross Industries',
          hired: 2018,
          id: 'a57bcc2b-1235-4e02-abb7-109a98c2a7f8',
        },
        {
          firstname: 'Lena',
          lastname: 'Tester',
          role: 'Scrum Master',
          department: 'Cross Industries',
          hired: 2013,
          id: 'e02c2b45-987c-49ec-992e-e7cd9e811f9a',
        },
        {
          firstname: 'Jacob',
          lastname: 'Java',
          role: 'Trainee',
          department: 'CI',
          id: '277a4591-30a9-4105-b383-bfddea824a4d',
        },
      ]);
  });

  it('adds an employee', async () => {
    const {
      body: { id },
    } = await request(app.getHttpServer()).post('/employees').send({
      firstname: 'Tanja',
      lastname: 'Tester',
      role: 'Software Engineer',
      department: 'CI',
    });

    return request(app.getHttpServer()).get(`/employees/${id}`).expect({
      id,
      firstname: 'Tanja',
      lastname: 'Tester',
      role: 'Software Engineer',
      department: 'CI',
    });
  });
});
