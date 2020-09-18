import { Injectable } from '@nestjs/common';
import { IdGeneratorService } from '../utils/idgenerator.service';
import { AddEmployeeDto } from './dto/addemployee.dto';
import { UpdateEmployeeDto } from './dto/updateemployee.dto';
import { EmployeesRepository } from './employees.repository';
import { LowdbAdapter } from './lowdb-adapter';

@Injectable()
export class LowdbRepository implements EmployeesRepository {
  private readonly COLLECTION = 'employees';

  constructor(
    private readonly lowdbAdapter: LowdbAdapter,
    private readonly idGeneratorService: IdGeneratorService,
  ) {}

  async addEmployee(addEmployeeDto: AddEmployeeDto) {
    return this.lowdbAdapter.addRecord(this.COLLECTION, {
      ...addEmployeeDto,
      id: this.idGeneratorService.generateId(),
    });
  }

  async deleteEmployee(employeeId: string) {
    return this.lowdbAdapter.deleteRecord(this.COLLECTION, employeeId);
  }

  async getEmployeeById(employeeId: string) {
    return this.lowdbAdapter.getRecordById(this.COLLECTION, employeeId);
  }

  async getEmployees(filterOptions?: { [p: string]: any }) {
    return this.lowdbAdapter.getRecords(this.COLLECTION);
  }

  async updateEmployee(
    employeeId: string,
    updateEmployeeDto: UpdateEmployeeDto,
  ) {
    return this.lowdbAdapter.updateRecord(
      this.COLLECTION,
      employeeId,
      updateEmployeeDto,
    );
  }
}
