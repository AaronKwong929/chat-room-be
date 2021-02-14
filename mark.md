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

3. 连接mysql失败

解决方法1：
mysql版本问题，8.0.23更改了验证方式，
改用mysql5.7即可，用docker跑可以避免卸载不干净等问题

解决方法2:(后面启动连接会失败，使用方法1解决)
```bash
# 登录/切换数据库/用新的机制更新我们的密码/ 刷新权限
mysql -u root
use mysql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';
flush privileges;
quit;
mysql -u root -p
```

