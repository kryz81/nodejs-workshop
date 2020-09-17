import { NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

export class EmployeeCreationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log(req.body);

    next();
  }
}
