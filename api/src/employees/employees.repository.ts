import { AddEmployeeDto } from './dto/addemployee.dto';
import { UpdateEmployeeDto } from './dto/updateemployee.dto';

export interface EmployeesRepository {
  getEmployees(filterOptions?: { [key: string]: any });

  getEmployeeById(employeeId: string);

  addEmployee(addEmployeeDto: AddEmployeeDto);

  updateEmployee(employeeId: string, updateEmployeeDto: UpdateEmployeeDto);

  deleteEmployee(employeeId: string);
}
