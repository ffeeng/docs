# nginx

## mac nginx常见命令

- 安装卸载
`brew install nginx` 
`brew uninstall nginx` 

- 常用指令
```bash
sudo nginx  
nginx -t
nginx -help
nginx -s reload
nginx -s stop
```

## linux nginx常用命令

```bash
nginx -t
nginx -s reload

systemctl stop nginx
systemctl restart nginx
systemctl status nginx
```


## 常见业务示例
```nginx
server {
    listen       8080;
    server_name  localhost;

    #charset koi8-r;
    #access_log  /var/log/nginx/host.access.log  main;

    location /app/ {
        proxy_pass  http://ip:port/app/;
    }

    location /console/ {
        proxy_pass  http://ip:port/console/;
    }

    location /v2/ {
        proxy_set_header  Host  $host;
        proxy_set_header   X-Real-IP $remote_addr;  
        proxy_set_header   x-forwarded-for $proxy_add_x_forwarded_for;
        proxy_pass  http://127.0.0.1:3000/v2/;
    }

    location / {
        proxy_pass  http://ip:port/;
    }
        # 开启_ 下划线头
    underscores_in_headers on;

    #error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }

    # proxy the PHP scripts to Apache listening on 127.0.0.1:80
    #
    #location ~ \.php$ {
    #    proxy_pass   http://127.0.0.1;
    #}

    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
    #
    #location ~ \.php$ {
    #    root           html;
    #    fastcgi_pass   127.0.0.1:9000;
    #    fastcgi_index  index.php;
    #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
    #    include        fastcgi_params;
    #}

    # deny access to .htaccess files, if Apache's document root
    # concurs with nginx's one
    #
    #location ~ /\.ht {
    #    deny  all;
    #}
}
```

### 参考
- [nginx指令](https://nginx.org/en/docs/dirindex.html)
- [nginx内置变量](https://nginx.org/en/docs/varindex.html)

