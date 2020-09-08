import {
  Controller,
  NotFoundException,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { EmployeesService } from '../employees/employees.service';
import { DocumentsService } from './documents.service';

@Controller('documents')
export class DocumentsController {
  constructor(
    private readonly documentsService: DocumentsService,
    private readonly employeesService: EmployeesService,
  ) {}

  @Post(':employeeId')
  async uploadDocument(@Param('employeeId') employeeId: string, @Req() req) {
    const employee = await this.employeesService.getEmployeeById(employeeId);

    if (!employee) {
      throw new NotFoundException('Invalid employee');
    }

    return this.documentsService.upload(employeeId, req);
  }
}
