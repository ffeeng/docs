# whistle代理用法

## 安装启动
```bash
npm install -g whistle
w2 start -H 127.0.0.1 
w2 start -n xx -w xx
```
## 常用操作

- 修改header
km.domain reqHeaders://{test-reqHeaders.json}
km.domain resHeaders://{test-reqHeaders.json}
```test-reqHeaders.json
ab: 111
```

- 代理接口
- 


## 替换文件
local.zhiliao.domain/1.html html://E:\xx\test\test.html
local.zhiliao.domain/1.js js://E:\xx\test\test.js
local.zhiliao.domain/1.css css://E:\xx\test\test.css
## 跨域 gzip
web.docer.wpscdn.cn resCors://*
web.docer.wpscdn.cn enable://gzip

## 种Cookie
wwo.domain resCookies://weboffice_branch=opf-amd-func-fp-fulltext-exporter
## 修改接口返回值
``` test.json
{
"code": 0,
"msg": "ok",
"data": []
}
```
local.zhiliao.domain replaceStatus://200
https://local.zhiliao.domain/a resBody://{test.json}

## 接口延迟
## https://local.zhiliao.domain/api/zl/space/square/list  reqDelay://1000
## https://local.zhiliao.domain/api/zl/space/square/list  resDelay://1000

## 修改js
``` test.js
alert(1);
```
local.zhiliao.domain/1.js jsAppend://{test.js}

## 修改css
```test.css
body{
	background:red;
}
```
local.zhiliao.domain/1.css cssAppend://{test.css}


## 前端页面走本地代码，接口走后端
km.domain/api km.domain/api
km.domain localhost:8080


## 使用本地页面
local.zhiliao.domain 127.0.0.1:8081

## 打印日志
testapi-zl.domain log://
## host
120.92.124.158 testapi-zl.domain

## 修改ua
local.zhiliao.domain ua://Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36

/wos.domain/ filter://hide
local.zhiliao.domain ua://{aa}
local.zhiliao.domain js://{js-test}
local.zhiliao.domain log://{log-test}
local.zhiliao.domain referer://https://vk.com/
local.zhiliao.domain reqHeaders://{req-headers}

## https://local.zhiliao.domain/api  https://10.90.129.185:9002/api
## 跨域
``` test1.json
origin: https://open-woa.domain/
methods: POST
headers: x-csrftoken
credentials: true
maxAge: 300000
```
https://open-xz.domain  resCors://{test1.json}
https://plussvr.domain resCors://https://local.zhiliao.domain


## 参考
https://wproxy.org/whistle/
