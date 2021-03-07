# 遇到的问题

1. VSCode 一直对 @nestjs/common @nestjs/testing 等报错 cannot resolve dependencies....

解决办法：~~打开 tsconfig.json，在 compilerOptions 里写入"moduleResoluton": "node"~~

真解决办法：tsconfig.json - compilerOptions - module: 'commonjs'

2. 生成文件目录

```bash
brew install tree

# 生成文件
tree -I "node_modules" -L 3 -o tree.md
```

3. 连接 mysql 失败

解决方法 1：
mysql 版本问题，8.0.23 更改了验证方式，
改用 mysql5.7 即可，用 docker 跑可以避免卸载不干净等问题

~~解决方法 2:~~(**后面启动连接会失败，使用方法 1 解决**)

```bash
# 登录/切换数据库/用新的机制更新我们的密码/ 刷新权限
mysql -u root
use mysql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';
flush privileges;
quit;
mysql -u root -p
```

4. TypeORM 设置类型为 timeStamp 时设置初始值

```typescript
Entity();
export abstract class Basic {
    // ...

    @Column({
        comment: `最近更新时间`,
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP',
    })
    updatedAt: Date;

    @Column({
        comment: `创建时间`,
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    createdAt: Date;

    // ...
}
```

5. 关于 TypeORM 使用事务无法触发的问题

不能直接 this.entity.save(dto)，这样不能触发 BeforeInsert 事务

需要 this.entity.create({})，再 this.entity.save()
