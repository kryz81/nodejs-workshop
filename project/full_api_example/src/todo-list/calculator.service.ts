import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculatorService {
  calculate(a, b) {
    return a * b;
  }
}
