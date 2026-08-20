import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './create-todo.dto';

@Injectable()
export class TodosService {
  private todos = [
    { id: 1, title: 'Learn NestJS', completed: false },
    { id: 2, title: 'Build a Todo API', completed: false },
  ];

  findAll() {
    return this.todos;
  }

  create(createTodoDto: CreateTodoDto) {
    const todo = {
      id: this.todos.length + 1,
      title: createTodoDto.title,
      completed: false,
    };

    this.todos.push(todo);

    return todo;
  }
}