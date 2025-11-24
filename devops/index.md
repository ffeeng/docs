# 运维
- [Linux 命令大全](https://www.runoob.com/linux/linux-command-manual.html)

## 常用指令
- 上传文件
  `scp dist-admin.zip root@10.8.58.42:/data/webroot `

- 查histroy
   `history | grep mysql`

- 重命名
   `mv dist dist20210330`

- 软链接
   `ln -s /usr/local/bin/npx /usr/bin`
- 查找应用路径

- kill端口进程
```bash
#mac 查看端口被那个进程占用 port:8000
lsof -i:8000
# pid:871
kill 871

#windows 查看端口被那个进程占用 port:8000
netstat -aon|findstr "8000"
# pid:871
taskkill /T /F /PID 871
```
