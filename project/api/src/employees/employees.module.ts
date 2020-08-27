import { Module } from '@nestjs/common';
import { EventService } from '../utils/event.service';
import { UtilsModule } from '../utils/utils.module';
import { EVENT_ADD_EMPLOYEE } from './config';
import { EmployeesController } from './employees.controller';
import { EmployeesMockRepository } from './employees.mock.repository';
import { EmployeesService } from './employees.service';
import { erpListener } from './listeners/erp.listener';
import { profilerListener } from './listeners/profiler.listener';
import { LowdbAdapter } from './lowdb-adapter';

@Module({
  imports: [UtilsModule],
  controllers: [EmployeesController],
  providers: [
    EmployeesService,
    LowdbAdapter,
    { provide: 'EmployeesRepository', useClass: EmployeesMockRepository },
  ],
})
export class EmployeesModule {
  constructor(private readonly eventService: EventService) {
    eventService.on(EVENT_ADD_EMPLOYEE, erpListener);
    eventService.on(EVENT_ADD_EMPLOYEE, profilerListener);
  }
}
