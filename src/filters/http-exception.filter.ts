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

        response.status(status).json({
            path: request.url,
            query: request.query,
            body: request.body,
            time: dayjs().format(`YYYY-MM-DD HH:mm:ss`),
            status: status,
            errorMsg: exception.getResponse(),
        });
    }
}
