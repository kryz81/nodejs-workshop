import { AddEmployeeWithIdDto } from './addemployee.dto';
import { UpdateEmployeeDto } from './updateemployee.dto';

export interface EmployeesRepository {
  getEmployees(filterOptions?: { [key: string]: any });

  getEmployeeById(employeeId: string);

  addEmployee(addEmployeeDto: AddEmployeeWithIdDto);

  updateEmployee(employeeId: string, updateEmployeeDto: UpdateEmployeeDto);

  deleteEmployee(employeeId: string);
}
