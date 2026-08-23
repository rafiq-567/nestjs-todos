import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './create-todo.dto';
import { UpdateTodoDto } from './update-todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Get()
  findAll() {
    return this.todosService.findAll();
  }

  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todosService.create(createTodoDto);
  }

  //parsing the id parameter to a number using ParseIntPipe
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.todosService.findOne(id);
  }

  @Patch(':id')
update(
  @Param('id',ParseIntPipe) id: number,
  @Body() updateTodoDto: UpdateTodoDto,
) {
  return this.todosService.update(id, updateTodoDto);
}

@Delete(':id')
remove(@Param('id', ParseIntPipe) id: number) {
  return this.todosService.remove(id);
}
}