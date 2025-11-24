# dom
## 浏览器工作原理
![webkit工作流程.png](img%2Fwebkit%E5%B7%A5%E4%BD%9C%E6%B5%81%E7%A8%8B.png)
## dom常见操作
![基本Dom操作.png](img%2F%E5%9F%BA%E6%9C%ACDom%E6%93%8D%E4%BD%9C.png)

## 事件转发和事件流
1. 捕获阶段 window->target过程
2. 事件阶段 事件执行
3. 冒泡阶段 target->window过程
   ![eventflow.svg](img%2Feventflow.svg)


## 默认行为和可取消事件
```js
let event = MouseEvent();
//停止传播
event.stopPropagation();
//阻止默认行为  例如：表单提交和重置，链接跳转，单选框复选框勾选
event.preventDefault(); defaultPrevented
```

## 参考
[DOM3规范](https://www.w3.org/TR/DOM-Level-3-Events/#dom-event-architecture)
[UI Event规范](https://www.w3.org/TR/DOM-Level-3-Events/#ui-events-intro)
