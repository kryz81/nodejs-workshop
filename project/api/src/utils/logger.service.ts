import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggerService {
  log(msg: any) {
    console.log(msg);
  }
}
