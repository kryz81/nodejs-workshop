import { Module } from '@nestjs/common';
import { UtilsModule } from '../utils/utils.module';
import { EmployeesController } from './employees.controller';
import { EmployeesMockRepository } from './employees.mock.repository';
import { EmployeesService } from './employees.service';
import { LowdbAdapter } from './lowdb-adapter';

@Module({
  imports: [UtilsModule],
  controllers: [EmployeesController],
  providers: [
    EmployeesService,
    LowdbAdapter,
    { provide: 'EmployeesRepository', useClass: EmployeesMockRepository },
  ],
})
export class EmployeesModule {}
