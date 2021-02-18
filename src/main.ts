import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { SwaggerModule } from '@nestjs/swagger';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

import { HttpExceptionFilter } from './filters/http-exception.filter';
import swaggerOptions from './config/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const nestWinston = app.get(WINSTON_MODULE_NEST_PROVIDER);
    app.useLogger(nestWinston);
    app.useGlobalFilters(new HttpExceptionFilter());

    const document = SwaggerModule.createDocument(app, swaggerOptions);
    SwaggerModule.setup('api', app, document);

    await app.listen(3000);
}
bootstrap();
