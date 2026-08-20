import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './create-todo.dto';
import { UpdateTodoDto } from './update-todo.dto';


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

  findOne(id: number) {
    return this.todos.find(todo => todo.id === id);
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
  const todo = this.todos.find(todo => todo.id === id);

  if (!todo) {
    return undefined;
  }

  if (updateTodoDto.title !== undefined) {
    todo.title = updateTodoDto.title;
  }

  if (updateTodoDto.completed !== undefined) {
    todo.completed = updateTodoDto.completed;
  }

  return todo;
}

remove(id: number) {
  const index = this.todos.findIndex(todo => todo.id === id);
  if(index === -1) {
    return undefined;
  }
  const deletedTodo = this.todos[index];
  this.todos.splice(index, 1);
  return deletedTodo;
}
}