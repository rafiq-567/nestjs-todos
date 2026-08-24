import {
  CanActivate,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';

@Injectable()
export class TodosGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    console.log('Guard running');

    return true;
  }
}