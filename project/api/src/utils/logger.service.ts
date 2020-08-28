import { Injectable } from '@nestjs/common';
import { APP_LOG_LEVEL } from '../config';

@Injectable()
export class LoggerService {
  log(msg: any) {
    console.log(APP_LOG_LEVEL, msg);
  }
}
