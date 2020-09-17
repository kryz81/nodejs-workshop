import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import employees from './employees';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly configService: ConfigService) {}

  @Get()
  getEmployees() {
    console.log(this.configService.get<string>('APP_PORT'));
    return employees;
  }

  @Get(':employeeId')
  getEmployee(@Param('employeeId') employeeId: string) {
    return {};
  }

  @Post()
  addEmployee(@Body() addEmployeeDto) {}

  @Put(':employeeId')
  updateEmployee(
    @Param('employeeId') employeeId: string,
    @Body() updateEmployeeDto,
  ) {}

  @Delete(':employeeId')
  deleteEmployee(@Param('employeeId') employeeId: string) {}
}
