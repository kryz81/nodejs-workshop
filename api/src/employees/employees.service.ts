import { Inject, Injectable } from '@nestjs/common';
import { EventService } from '../utils/event.service';
import { FileSystemService } from '../utils/filesystem.service';
import { AddEmployeeDto } from './dto/addemployee.dto';
import { UpdateEmployeeDto } from './dto/updateemployee.dto';
import { EmployeesRepository } from './employees.repository';

@Injectable()
export class EmployeesService {
  constructor(
    @Inject('EmployeesRepository')
    private readonly employeesRepository: EmployeesRepository,
    private readonly eventService: EventService,
    private readonly fileSystemService: FileSystemService,
  ) {}

  async getEmployees() {
    return this.employeesRepository.getEmployees();
  }

  async getEmployee(employeeId: string) {
    return this.employeesRepository.getEmployeeById(employeeId);
  }

  async addEmployee(addEmployeeDto: AddEmployeeDto) {
    const result = await this.employeesRepository.addEmployee(addEmployeeDto);
    await this.fileSystemService.write(
      `${__dirname}/../../out/${result.id}.txt`,
      JSON.stringify(result),
    );
    this.eventService.emit('employee_creation', result);

    return result;
  }

  async updateEmployee(employeeId: string, updateEmployeeDto: AddEmployeeDto) {
    return this.employeesRepository.updateEmployee(
      employeeId,
      updateEmployeeDto,
    );
  }

  async deleteEmployee(employeeId: string) {
    return this.employeesRepository.deleteEmployee(employeeId);
  }
}
