import { Inject, Injectable } from '@nestjs/common';
import { EmployeesRepository } from './employees.repository';

@Injectable()
export class EmployeesService {
  constructor(
    @Inject('EmployeesRepository') employeesRepository: EmployeesRepository,
  ) {}
}
