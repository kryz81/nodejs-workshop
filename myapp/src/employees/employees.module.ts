import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { APP_DB_PATH } from '../config';
import { EmployeeCreationMiddleware } from './employeecreation.middleware';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';
import { LowdbAdapter } from './lowdb-adapter';
import { LowDbRepository } from './repositories/lowdb.repository';

@Module({
  controllers: [EmployeesController],
  providers: [
    EmployeesService,
    LowdbAdapter,
    {
      provide: 'EmployeesRepository',
      useClass: LowDbRepository,
    },
  ],
})
export class EmployeesModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(EmployeeCreationMiddleware)
      .forRoutes({ path: 'employees', method: RequestMethod.POST });
  }
}
