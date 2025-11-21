# webStorm

## Prettier

![prettier.png](img%2Fprettier.png)

- .prettier.js文件如下
```js
module.exports = {
  $schema: 'https://json.schemastore.org/prettierrc',
  semi: true,
  tabWidth: 2,
  singleQuote: true,
  printWidth: 100,
  trailingComma: 'none'
}
```
注意webstorm启用保存运行prettier需要restart重启webstorm来加载配置

```bash
# 验证.prettier规则
 prettier --write src/main.ts
```
