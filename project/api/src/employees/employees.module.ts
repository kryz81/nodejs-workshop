import { Module } from '@nestjs/common';
import { EmployeesController } from './employees.controller';

@Module({
  controllers: [EmployeesController]
})
export class EmployeesModule {}
