import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AddEmployeeDto } from './dto/addemployee.dto';
import { UpdateEmployeeDto } from './dto/updateemployee.dto';
import employees from './employees';
import { EmployeesService } from './employees.service';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get()
  getEmployees() {
    return this.employeesService.getEmployees();
  }

  @Get(':employeeId')
  getEmployee(@Param('employeeId') employeeId: string) {
    return this.employeesService.getEmployee(employeeId);
  }

  @Post()
  addEmployee(@Body() addEmployeeDto: AddEmployeeDto) {
    return this.employeesService.addEmployee(addEmployeeDto);
  }

  @Put(':employeeId')
  updateEmployee(
    @Param('employeeId') employeeId: string,
    updateEmployeeDto: UpdateEmployeeDto,
  ) {
    return this.employeesService.updateEmployee(employeeId, updateEmployeeDto);
  }

  @Delete(':employeeId')
  deleteEmployee(@Param('employeeId') employeeId: string) {
    return this.employeesService.deleteEmployee(employeeId);
  }
}
