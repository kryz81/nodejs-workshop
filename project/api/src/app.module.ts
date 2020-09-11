import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { EmployeesModule } from './employees/employees.module';
import { ReportService } from './report.service';
import { UtilsModule } from './utils/utils.module';
import { DocumentsModule } from './documents/documents.module';

@Module({
  imports: [EmployeesModule, UtilsModule, DocumentsModule],
  controllers: [AppController],
  providers: [ReportService],
})
export class AppModule {}
