import { AddEmployeeWithIdDto } from './dto/addemployee.dto';
import { UpdateEmployeeDto } from './dto/updateemployee.dto';

export interface EmployeesRepository {
  getEmployees(filterOptions?: { [key: string]: any });

  getEmployeeById(employeeId: string);

  addEmployee(addEmployeeDto: AddEmployeeWithIdDto);

  updateEmployee(employeeId: string, updateEmployeeDto: UpdateEmployeeDto);

  deleteEmployee(employeeId: string);
}
