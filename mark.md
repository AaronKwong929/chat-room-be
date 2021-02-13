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
