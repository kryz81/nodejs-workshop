import { Module } from '@nestjs/common';
import { EventService } from '../utils/event.service';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';
import { LowdbAdapter } from './lowdb-adapter';
import { LowdbRepository } from './lowdb.repository';

@Module({
  controllers: [EmployeesController],
  providers: [
    LowdbAdapter,
    EmployeesService,
    {
      provide: 'EmployeesRepository',
      useClass: LowdbRepository,
    },
  ],
})
export class EmployeesModule {
  constructor(private readonly eventService: EventService) {
    eventService.init();
  }
}
