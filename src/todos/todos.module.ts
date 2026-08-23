import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { TodosMiddleware } from './todos.middleware';

@Module({
  controllers: [TodosController],
  providers: [TodosService]
})
export class TodosModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(TodosMiddleware)
    .forRoutes(TodosController);
  }
}
