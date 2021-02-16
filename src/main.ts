import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { HttpExceptionFilter } from './filters/http-exception.filter';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const nestWinston = app.get(WINSTON_MODULE_NEST_PROVIDER);
    app.useLogger(nestWinston);
    app.useGlobalFilters(new HttpExceptionFilter());

    await app.listen(3000);
}
bootstrap();
