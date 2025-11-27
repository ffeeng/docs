# lint



## antfu

使用前安装 
- "@antfu/eslint-config": "^4.11.0",
- "unimported": "^1.31.1",
-  "eslint": "^9.23.0",

```javascript
// eslint.config.js
import antfu from '@antfu/eslint-config';

export default antfu({
  stylistic: {
    indent: 2,
    quotes: 'single',
    semi: true,
    jsx: true,
  },
  vue: {
    overrides: {
      'vue/no-reserved-component-names': 'off',
      'vue/html-indent': ['error', 2],
      'vue/script-indent': ['error', 2, { baseIndent: 1 }],
      'comma-dangle': ['warn', 'never'],
      'style/comma-dangle': ['warn', 'never'],
      'style/indent': 'off',
      'unused-imports/no-unused-vars': 'warn',
      'vue/no-mutating-props': 'warn',
      'no-debugger': 'warn',
      'no-console': 'off',
      'vue/html-self-closing': 'off',
    },
  },
  javascript: {
    overrides: {
      'no-console': 'off',
      'style/comma-dangle': ['warn', 'never'],
      'unused-imports/no-unused-vars': 'warn',
    },
  },
  rules: {
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
  },
});
```

## 参考
- https://juejin.cn/post/7038143752036155428?searchId=20240422153232E9FEBDEE6F9C092E97C2
