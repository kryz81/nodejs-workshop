const { fork } = require('child_process');
import { Injectable } from '@nestjs/common';

@Injectable()
export class ReportService {
  async run(toolPath: string, employeeId: string) {
    const child = fork(toolPath, { silent: true });

    return new Promise((resolve, reject) => {
      child.on('message', (msg) => {
        resolve(msg.result);
      });

      child.on('exit', (code, signal) => {
        if (code === 1) {
          reject(new Error('Unknown error'));
        }
      });

      child.send({ employeeId });
    });
  }
}
