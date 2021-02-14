import { Module } from '@nestjs/common';
import { AppController } from './modules/app/app.controller';
import { AppService } from './modules/app/app.service';

import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';

import { TypeOrmModule } from '@nestjs/typeorm';
import databaseConfig from './config/database';

import { UserModule } from './modules/user/user.module';

@Module({
    imports: [
        WinstonModule.forRoot({
            level: `warn`,
            exitOnError: false,
            format: winston.format.combine(
                winston.format.timestamp({ format: `YYYY-MM-DD HH:mm:ss` }),
                winston.format.splat(),
                winston.format.printf(
                    (info) =>
                        `${info.timestamp} ${info.level}: [${info.message}]`
                )
            ),
            transports: [
                new winston.transports.File({
                    filename: `logs.log`,
                    handleExceptions: true,
                }),
            ],
        }),

        TypeOrmModule.forRoot(databaseConfig),

        UserModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
