import { errorResponse } from '@/types';
import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpException,
} from '@nestjs/common';
import dayjs = require('dayjs');
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp(),
            response = ctx.getResponse<Response>(),
            request = ctx.getRequest<Request>(),
            status = exception.getStatus();

        const result: errorResponse = {
            time: dayjs().format(`YYYY-MM-DD HH:mm:ss`),
            code: -1,
            message: `请求失败`,
            statusCode: status,
            details: {
                ...(exception.getResponse() as Record<string, any>),
                path: request.path,
                query: request.query,
                params: request.params,
                body: request.body,
            },
        };

        response.status(status).json(result);
    }
}
