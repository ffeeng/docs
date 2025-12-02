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
