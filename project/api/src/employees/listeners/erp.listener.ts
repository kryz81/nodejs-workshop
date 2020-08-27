import { AddEmployeeWithIdDto } from '../addemployee.dto';
import { informERP } from '../proxies/erp.proxy';

export function erpListener(employeeData: AddEmployeeWithIdDto) {
  informERP(employeeData);
}
