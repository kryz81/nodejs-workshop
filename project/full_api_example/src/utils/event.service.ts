import { Injectable } from '@nestjs/common';
import { EventEmitter } from 'events';
import { EVENT_ADD_EMPLOYEE } from '../employees/config';
import { erpListener } from '../employees/listeners/erp.listener';
import { profilerListener } from '../employees/listeners/profiler.listener';

@Injectable()
export class EventService extends EventEmitter {
  init() {
    this.on(EVENT_ADD_EMPLOYEE, erpListener);
    this.on(EVENT_ADD_EMPLOYEE, profilerListener);
  }
}
