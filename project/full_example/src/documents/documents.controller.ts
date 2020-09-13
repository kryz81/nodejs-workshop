import {
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Req,
  Res,
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

    this.documentsService.upload(employeeId, req);
  }

  @Get(':documentId')
  async downloadDocument(@Param('documentId') documentId: string, @Res() res) {
    const stream = await this.documentsService.download(documentId);
    stream.pipe(res);
  }
}
