# shell

## 常用命令
```bash
# 上传文件
scp dist-admin.zip root@10.8.58.42:/data/webroot 
# 查histroy
history | grep mysql
# 重命名
mv dist dist20210330
# 软链接
ln -s /usr/local/bin/npx /usr/bin
# 查找应用路径

# 查历史记录
Histroy | grep mysql
```

## [zx用法](https://juejin.cn/post/6979989936137043999)
- zx使用支持node await语法，可以实现部署自动化
- 安装
  `npm i -g zx`
- 编写脚本 scripts/deploy.js
```js
#!/usr/bin/env zx

// 在控制台打印
$.verbose = true

await $`ls`;
cd('.vitepress/dist');
await $`pwd`;
await $`git push`;
```
- 和前端工程集成，在package.json中添加命令
`"deploy": " chmod +x script/deploy.js && script/deploy.js"`
