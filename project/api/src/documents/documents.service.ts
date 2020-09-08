import { Request } from 'express';
import { Injectable } from '@nestjs/common';
import { createWriteStream } from 'fs';
import { GenerateIdService } from '../utils/generateid.service';

@Injectable()
export class DocumentsService {
  constructor(private readonly generateIdService: GenerateIdService) {}

  async upload(employeeId: string, req) {
    console.log(req.file);
    const stream = createWriteStream(`${__dirname}/../../data/test`);
  }
}
