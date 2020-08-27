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
import { FileSystemService } from '../utils/filesystem.service';
import { AddEmployeeDto } from './addemployee.dto';
import { EmployeesService } from './employees.service';
import { UpdateEmployeeDto } from './updateemployee.dto';

@Controller('employees')
export class EmployeesController {
  constructor(
    private readonly employeesService: EmployeesService,
    private readonly fileSystemService: FileSystemService,
  ) {}

  @Get('import')
  async importEmployees() {
    const data = await this.fileSystemService.read(
      `${__dirname}/../../in/employees.txt`,
    );
    const employees = JSON.parse(data.toString());

    // add to db

    return employees;
  }

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
    return this.employeesService.addEmployee(addEmployeeDto);
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
