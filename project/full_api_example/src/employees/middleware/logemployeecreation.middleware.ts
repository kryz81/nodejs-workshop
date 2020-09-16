import { Injectable, NestMiddleware } from '@nestjs/common';
import { LoggerService } from '../../utils/logger.service';

@Injectable()
export class LogEmployeeCreationMiddleware implements NestMiddleware {
  constructor(private readonly loggerService: LoggerService) {}

  use(req, res, next) {
    this.loggerService.log(req.body);
    next();
  }
}
