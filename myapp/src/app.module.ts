import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesController } from './employees/employees.controller';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [
    EmployeesModule,
    ConfigModule.forRoot({
      envFilePath: `${__dirname}/../env/.env`,
      isGlobal: true,
    }),
  ],
  controllers: [AppController, EmployeesController],
  providers: [AppService],
})
export class AppModule {}
