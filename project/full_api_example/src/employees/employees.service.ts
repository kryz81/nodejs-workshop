import { Inject, Injectable } from '@nestjs/common';
import { EventService } from '../utils/event.service';
import { FileSystemService } from '../utils/filesystem.service';
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
    private readonly eventService: EventService,
    private readonly fileSystemService: FileSystemService,
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

    await this.employeesRepository.addEmployee(dto);

    this.eventService.emit('add_employee', dto);

    try {
      await this.fileSystemService.save(
        `${__dirname}/../../out/${dto.id}.txt`,
        JSON.stringify(dto),
      );
    } catch (err) {
      this.eventService.emit('error', err.message);
    }

    return dto;
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
