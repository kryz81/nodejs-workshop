import {
  Controller,
  Get,
  InternalServerErrorException,
  Param,
} from '@nestjs/common';
import { ReportService } from './report.service';

@Controller()
export class AppController {
  constructor(private readonly reportService: ReportService) {}

  TOOL_PATH = `${__dirname}/../tool.js`;

  @Get('report/:employeeId')
  async getReport(@Param('employeeId') employeeId: string) {
    try {
      return await this.reportService.run(this.TOOL_PATH, employeeId);
    } catch (err) {
      throw new InternalServerErrorException('Cannot access report tool');
    }
  }
}
