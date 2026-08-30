import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './create-todo.dto';
import { UpdateTodoDto } from './update-todo.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { TotalUpdateTodoDto } from './total-update-todo.dto';

@Injectable()
export class TodosService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.todo.findMany();
  }

  async create(createTodoDto: CreateTodoDto) {
    return this.prisma.todo.create({
      data: {
        title: createTodoDto.title,
        completed: false,
      },
    });
  }

  async findOne(id: number) {
    const todo = await this.prisma.todo.findUnique({ where: { id } });

    if (!todo) {
      throw new NotFoundException('Todo not found');
    }
    return todo;
  }
// added update and remove methods to the TodosService class
  async update(id: number, updateTodoDto: UpdateTodoDto) {
    await this.findOne(id); // throws if not found

    return this.prisma.todo.update({
      where: { id },
      data: {
        ...(updateTodoDto.title !== undefined && { title: updateTodoDto.title }),
        ...(updateTodoDto.completed !== undefined && { completed: updateTodoDto.completed }),
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id); // throws if not found

    return this.prisma.todo.delete({ where: { id } });
  }

  async totalUpdate(id: number, totalUpdateTodoDto: TotalUpdateTodoDto){
    await this.findOne(id);

    const replacedTodo = {
      id: id,
      title: totalUpdateTodoDto.title,
      completed: totalUpdateTodoDto.completed,
    }
  }
}