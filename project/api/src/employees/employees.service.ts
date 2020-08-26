import { Inject, Injectable } from '@nestjs/common';
import { GenerateIdService } from '../utils/generateid.service';
import { AddEmployeeDto } from './addemployee.dto';
import { EmployeesRepository } from './employees.repository';
import { UpdateEmployeeDto } from './updateemployee.dto';

@Injectable()
export class EmployeesService {
  constructor(
    @Inject('EmployeesRepository')
    private readonly employeesRepository: EmployeesRepository,
    private readonly generateIdService: GenerateIdService,
  ) {}

  async getEmployees(filterOptions: { [key: string]: any } = {}) {
    return this.employeesRepository.getEmployees(filterOptions);
  }

  async getEmployeeById(employeeId: string) {
    return this.employeesRepository.getEmployeeById(employeeId);
  }

  async addEmployee(addEmployeeDto: AddEmployeeDto) {
    const id = this.generateIdService.generateId();
    const dto = { ...addEmployeeDto, id };

    return this.employeesRepository.addEmployee(dto);
  }

  async updateEmployee(
    employeeId: string,
    updateEmployeeDto: UpdateEmployeeDto,
  ) {
    return this.employeesRepository.updateEmployee(
      employeeId,
      updateEmployeeDto,
    );
  }

  async deleteEmployee(employeeId: string) {
    return this.employeesRepository.deleteEmployee(employeeId);
  }
}
