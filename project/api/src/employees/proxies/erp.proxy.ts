import { ERP_URL } from '../../config';

export function informERP(userData) {
  console.log(`Sending user data to ERP... ${ERP_URL}`, userData);
}
