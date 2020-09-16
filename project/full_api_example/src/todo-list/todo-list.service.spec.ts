import { Test, TestingModule } from '@nestjs/testing';
import { CalculatorService } from './calculator.service';
import { TodoListService } from './todo-list.service';

describe('TodoListService', () => {
  let service: TodoListService;
  let calculator: CalculatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TodoListService,
        {
          provide: CalculatorService,
          useClass: class {
            calculate() {
              return 100;
            }
          },
        },
      ],
    }).compile();

    service = module.get<TodoListService>(TodoListService);
    calculator = module.get<CalculatorService>(CalculatorService);
  });

  it('should return 100', () => {
    const result = service.run(10);
    expect(result).toBe(100);
  });

  it('calls calculator service with two parameters', () => {
    const spy = jest.spyOn(calculator, 'calculate');
    service.run(10);
    expect(spy).toBeCalledWith(10, 10);
  });
});
