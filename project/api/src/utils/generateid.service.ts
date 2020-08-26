import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';

@Injectable()
export class GenerateIdService {
  generateId() {
    return v4();
  }
}
