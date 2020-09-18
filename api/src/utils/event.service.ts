import { EventEmitter } from 'events';
import { informERP } from '../employees/proxies/erp.proxy';
import { informProfiler } from '../employees/proxies/profiler.proxy';

export class EventService extends EventEmitter {
  init() {
    this.on('employee_creation', informERP);
    this.on('employee_creation', informProfiler);
  }
}
