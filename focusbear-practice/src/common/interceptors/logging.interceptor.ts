import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LogginInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const method = req.method;
    const url = req.url;
    const now = Date.now();

    console.log(`[Interceptor] Before route handler: ${method} ${url}`);

    return next
      .handle()
      .pipe(
        tap(() =>
          console.log(
            `[Interceptor] After route handler: ${method} ${url} took ${Date.now() - now}ms`,
          ),
        ),
      );
  }
}
