# 文件夹描述

configs

```tree
├── database.ts
├── winston.ts
└── readme.md
```

## 数据库 database.ts 的配置

```typescript
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const configs: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '****',
    database: '****',
    entities: ['dist/entity/*.entity.js'],
    synchronize: true,
};

export default configs;
```
