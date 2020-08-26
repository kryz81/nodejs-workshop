import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesMockRepository } from './employees/employees.mock.repository';
import { EmployeesModule } from './employees/employees.module';
import { LowdbAdapter } from './employees/lowdb-adapter';
import { UtilsModule } from './utils/utils.module';

@Module({
  imports: [EmployeesModule, UtilsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
