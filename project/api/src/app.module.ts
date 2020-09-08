import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesModule } from './employees/employees.module';
import { UtilsModule } from './utils/utils.module';
import { DocumentsModule } from './documents/documents.module';

@Module({
  imports: [EmployeesModule, UtilsModule, DocumentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
