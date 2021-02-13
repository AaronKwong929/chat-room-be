import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const configs: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'test',
    // entities: ['dist/**/*.entity{.ts,.js}'],
    entities: [],
    synchronize: true,
};
export default configs;
