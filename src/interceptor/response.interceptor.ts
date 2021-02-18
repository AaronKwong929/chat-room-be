import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import dayjs = require('dayjs');
import { successResponse } from '@/types';

@Injectable()
export class ResponseInterceptor<T>
    implements NestInterceptor<T, successResponse<T>> {
    intercept(
        context: ExecutionContext,
        next: CallHandler<T>
    ): Observable<successResponse<T>> {
        return next.handle().pipe(
            map((data) => {
                return {
                    data,
                    code: 0,
                    message: '请求成功',
                    time: dayjs().format(`YYYY-MM-DD HH:mm:ss`),
                };
            })
        );
    }
}
