import { Injectable } from '@nestjs/common';
import { EmployeesRepository } from './employees.repository';
import { LowdbAdapter } from './lowdb-adapter';

@Injectable()
export class EmployeesMockRepository implements EmployeesRepository {
  private readonly COLLECTION = 'employees';

  constructor(private readonly db: LowdbAdapter) {}

  async getEmployees(filterOptions: { [key: string]: any } = {}) {
    return this.db.getRecords(this.COLLECTION, filterOptions);
  }

  async getEmployeeById(employeeId: string) {
    return this.db.getRecordById(this.COLLECTION, employeeId);
  }

  async addEmployee(addEmployeeDto) {
    return this.db.addRecord(this.COLLECTION, addEmployeeDto);
  }

  async updateEmployee(employeeId: string, updateEmployeeDto) {
    return this.db.updateRecord(this.COLLECTION, employeeId, updateEmployeeDto);
  }

  async deleteEmployee(employeeId: string) {
    return this.db.deleteRecord(this.COLLECTION, employeeId);
  }
}
