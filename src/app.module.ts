import { Module } from '@nestjs/common';

import { WinstonModule } from 'nest-winston';
import { TypeOrmModule } from '@nestjs/typeorm';

import winstonConfig from './config/winston';
import databaseConfig from './config/database';

import { UserModule } from './modules/user/user.module';

@Module({
    imports: [
        WinstonModule.forRoot(winstonConfig),
        TypeOrmModule.forRoot(databaseConfig),
        UserModule,
    ],
})
export class AppModule {}
