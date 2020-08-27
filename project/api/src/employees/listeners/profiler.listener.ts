import { AddEmployeeWithIdDto } from '../addemployee.dto';
import { informProfiler } from '../proxies/profiler.proxy';

export function profilerListener(employeeData: AddEmployeeWithIdDto) {
  informProfiler(employeeData);
}
