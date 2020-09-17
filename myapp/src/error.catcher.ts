import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class ErrorCatcher implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    // logging error to external monitoring tool
    console.log(`Sending: ${exception.message}`);

    const context = host.switchToHttp();
    const res = context.getResponse<Response>();

    res.status(500).json({
      msg: 'something',
    });
  }
}
