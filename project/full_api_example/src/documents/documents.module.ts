import { Module } from '@nestjs/common';
import { EmployeesModule } from '../employees/employees.module';
import { UtilsModule } from '../utils/utils.module';
import { DocumentsController } from './documents.controller';
import { DocumentsService } from './documents.service';

@Module({
  imports: [EmployeesModule, UtilsModule],
  controllers: [DocumentsController],
  providers: [DocumentsService],
})
export class DocumentsModule {}
