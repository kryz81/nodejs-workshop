import { Injectable } from '@nestjs/common';
import { CalculatorService } from './calculator.service';

@Injectable()
export class TodoListService {
  constructor(private readonly calculatorService: CalculatorService) {}

  run(a: number) {
    return this.calculatorService.calculate(a, a);
  }
}
