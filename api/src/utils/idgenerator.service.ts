import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';

@Injectable()
export class IdGeneratorService {
  generateId() {
    return v4();
  }
}
