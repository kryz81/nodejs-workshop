import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { AddEmployeeDto } from './addemployee.dto';
import employees from './employees';
import { EmployeesService } from './employees.service';
import { UpdateEmployeeDto } from './updateemployee.dto';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get()
  getEmployees(@Query() query) {
    return this.employeesService.getEmployees(query);
  }

  @Get(':id')
  async getEmployee(@Param('id') employeeId: string) {
    const employee = await this.employeesService.getEmployeeById(employeeId);

    if (!employee) {
      throw new NotFoundException(`Employee with ID ${employeeId} not found`);
    }

    return employee;
  }

  @Post()
  addEmployee(@Body() addEmployeeDto: AddEmployeeDto) {
    this.employeesService.addEmployee(addEmployeeDto);
  }

  @Put(':id')
  async updateEmployee(
    @Param('id') employeeId: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ) {
    const employee = await this.employeesService.getEmployeeById(employeeId);

    if (!employee) {
      throw new NotFoundException(`Employee with ID ${employeeId} not found`);
    }

    this.employeesService.updateEmployee(employeeId, updateEmployeeDto);
  }

  @Delete(':id')
  async deleteEmployee(@Param('id') employeeId: string) {
    const employee = await this.employeesService.getEmployeeById(employeeId);

    if (!employee) {
      throw new NotFoundException(`Employee with ID ${employeeId} not found`);
    }

    this.employeesService.deleteEmployee(employeeId);
  }
}
