import { Controller, Get } from '@nestjs/common';
import employees from './employees';

@Controller('employees')
export class EmployeesController {
  @Get()
  getEmployees() {
    return employees;
  }
}
