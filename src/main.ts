import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        // logger: false,
    });

    const nestWinston = app.get(WINSTON_MODULE_NEST_PROVIDER);
    app.useLogger(nestWinston);

    await app.listen(3000);
}
bootstrap();
