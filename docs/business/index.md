
## 配置代理，是前端单独运行起来，指向线上服务器

```javascript
  server: {
    host: true,
    proxy: {
      '/api': {
        target: 'https://muse.xxx.tech:2443',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '/app-api'),
      },
    },
  },
```



