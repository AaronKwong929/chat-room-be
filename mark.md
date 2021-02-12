# 遇到的问题

1. VSCode 一直对 @nestjs/common @nestjs/testing 等报错 cannot resolve dependencies....

解决办法：打开 tsconfig.json，在 compilerOptions 里写入"moduleResoluton": "node"
