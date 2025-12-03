## 安装docker
1. 安装docker desktop

## docker compose常用命令
```bash

#启动
docker compose up -d
#停止容器
docker compose down
#重新启动（常用）
docker compose restart

#查看日志
docker compose logs -f
#启动一个服务
docker compose restart mysql
#删除所有镜像 + 挂载数据
docker compose down -v
```

## 编写docker-compose.yaml文件

```yaml
services:
  mysql:
    image: mysql:8.0
    container_name: mysql
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: 123456
    ports:
      - "3306:3306"
    volumes:
      - ./mysql/data:/var/lib/mysql
      - ./mysql/conf:/etc/mysql/conf.d
      - ./mysql/logs:/var/log/mysql

  web:
    image: nginx:latest
    container_name: nginx
    ports:
      - "80:80"
```



## 启动容器
```bash
docker compose up -d
```


## 创建数据库
```bash
mysql -h 127.0.0.1 -P 3306 -u root -p
#输入密码
create database test;
show databases;
```
## 用工具连接mysql数据库


## 用dockerfile运行前端代码
```bash
# -----------------------
# 1️⃣ Build Stage
# -----------------------
FROM node:22-alpine AS builder

# 设置 npm 源（可选）
# RUN npm config set registry https://registry.npmmirror.com

WORKDIR /app

COPY package*.json ./
COPY pnpm-lock.yaml ./
RUN npm install -g pnpm --registry https://registry.npmmirror.com/ --fetch-timeout=60000
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build:dev

# -----------------------
# 2️⃣ Production Stage
# -----------------------
FROM nginx:alpine

# 删除默认配置（可选）
RUN rm -rf /usr/share/nginx/html/*

# 将构建产物复制到 nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# 拷贝 nginx 配置（用于 SPA history 模式）
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```
```bash
#用dockerfile创建镜像
docker build -t web .
``` 

## 用docker-compose运行前端代码

- docker-compose up -d 运行代码
```yaml
services:
  web:
    image: web:latest
    container_name: web
    ports:
      - "5173:80"
    volumes:
      - ./nginx/conf.d:/etc/nginx/conf.d       # 挂载配置目录
      - ./nginx/log:/var/log/nginx
```
- http://localhost:5173访问页面

