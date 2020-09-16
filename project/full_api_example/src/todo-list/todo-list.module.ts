import { Module } from '@nestjs/common';
import { TodoListController } from './todo-list.controller';
import { TodoListService } from './todo-list.service';
import { CalculatorService } from './calculator.service';

@Module({
  controllers: [TodoListController],
  providers: [TodoListService, CalculatorService],
})
export class TodoListModule {}
