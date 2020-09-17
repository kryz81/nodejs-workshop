import { AddEmployeeWithIdDto } from '../dto/addemployee.dto';
import { UpdateEmployeeDto } from '../dto/updateemployee.dto';
import { EmployeesRepository } from '../employees.repository';

import { LowdbAdapter } from '../lowdb-adapter';

export class LowDbRepository implements EmployeesRepository {
  private readonly COLLECTION = 'employees';

  constructor(private readonly lowdbAdapter: LowdbAdapter) {}

  async addEmployee(addEmployeeDto: AddEmployeeWithIdDto) {
    return this.lowdbAdapter.addRecord(this.COLLECTION, addEmployeeDto);
  }

  async deleteEmployee(employeeId: string) {
    return this.lowdbAdapter.deleteRecord(this.COLLECTION, employeeId);
  }

  async getEmployeeById(employeeId: string) {
    return this.lowdbAdapter.getRecordById(this.COLLECTION, employeeId);
  }

  getEmployees(filterOptions?: { [p: string]: any }) {}

  updateEmployee(employeeId: string, updateEmployeeDto: UpdateEmployeeDto) {}
}
