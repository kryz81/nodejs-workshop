import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { EventService } from '../utils/event.service';
import { FileSystemService } from '../utils/filesystem.service';
import { UtilsModule } from '../utils/utils.module';
import { EVENT_ADD_EMPLOYEE } from './config';
import { EmployeesController } from './employees.controller';
import { EmployeesMockRepository } from './employees.mock.repository';
import { EmployeesService } from './employees.service';
import { erpListener } from './listeners/erp.listener';
import { profilerListener } from './listeners/profiler.listener';
import { LowdbAdapter } from './lowdb-adapter';
import { LogEmployeeCreationMiddleware } from './middleware/logemployeecreation.middleware';

@Module({
  imports: [UtilsModule],
  controllers: [EmployeesController],
  providers: [
    EmployeesService,
    LowdbAdapter,
    { provide: 'EmployeesRepository', useClass: EmployeesMockRepository },
  ],
  exports: [EmployeesService],
})
export class EmployeesModule implements NestModule {
  constructor(
    private readonly eventService: EventService,
    private readonly fileSystemService: FileSystemService,
  ) {
    eventService.on(EVENT_ADD_EMPLOYEE, erpListener);
    eventService.on(EVENT_ADD_EMPLOYEE, profilerListener);

    const watcher = fileSystemService.watch(`${__dirname}/../../in`);

    watcher.on('change', async (eventType, filename) => {
      if (eventType === 'rename' && filename) {
        const file = `${__dirname}/../../in/${filename}`;
        try {
          const data = await fileSystemService.read(file);
          const employees = JSON.parse(data.toString());
          console.log(employees);

          // add to db

          await fileSystemService.deleteFile(file);
        } catch {}
      }
    });

    watcher.on('error', () => {
      // @todo
    });
  }

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LogEmployeeCreationMiddleware)
      .forRoutes({ path: 'employees', method: RequestMethod.POST });
  }
}
