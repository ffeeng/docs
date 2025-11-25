
## 读取sse代码

```javascript
export function sse() {
    const content = ref('');
    const contentMap = ref({});
    const isLoading = ref(false);
    const reqParam = ref({});
    const resId = ref('');
    const dataArr = ref([]);
    let controller;

    async function start(url, data, type = 'str') {
        try {
            stop();
            dataArr.value = [];

            reqParam.value = [url, { ...data }, type];
            content.value = '';
            contentMap.value = {};
            isLoading.value = true;
            controller = new AbortController();
            let id;
            if (type !== 'one') {
                id = await Http.post('ai/chat/conversation/create-my-v2', {
                    json: { type: data.type },
                }).json();
                delete data.type;
            }
            if (id) {
                data.conversationId = id;
            }
            const response = await Http.post(url, {
                signal: controller.signal,
                json: data,
            });

            const contentType = response.headers.get('content-type');
            if (contentType === 'application/json') {
                const json = await response.json();
                if (json.code !== 0) {
                    isLoading.value = false;
                    console.error('请求错误');
                }
                return;
            }
            const reader = response.body.getReader();
            const decoder = new TextDecoder('utf-8');
            let buffer = '';

            while (true) {
                const { done, value } = await reader.read();
                if (done) {
                    isLoading.value = false;
                    break;
                }
                // 拼接字符串（可能截断）
                buffer += decoder.decode(value, { stream: true });
                // 按两个换行符切分事件
                for (let boundary = buffer.indexOf('\n\n'); boundary !== -1; boundary = buffer.indexOf('\n\n')) {
                    const chunk = buffer.slice(0, boundary); // 一个完整消息
                    buffer = buffer.slice(boundary + 2); // 保留未完整部分

                    // 解析每行 data:
                    const lines = chunk.split('\n');
                    const dataLines = lines
                        .filter(line => line.startsWith('data:'))
                        .map(line => line.replace(/^data:\s?/, ''))
                        .join('');

                    if (dataLines.trim() !== '') {
                        const { code, msg, data } = JSON.parse(dataLines);
                        if (code !== 0) {
                            message.error(msg);
                            isLoading.value = false;
                            return;
                        }
                        dataArr.value.push(data);

                        if (type === 'map') {
                            for (const key of Object.keys(data)) {
                                if (!contentMap.value[key]) {
                                    contentMap.value[key] = '';
                                }
                                contentMap.value[key] += data[key];
                            }
                        }
                        else {
                            if (type === 'data') {
                                continue;
                            }
                            const { receive: { content: res, id }, complete } = data;
                            resId.value = id;
                            if (!complete && res !== null) {
                                content.value += res;
                            }
                            else {
                                isLoading.value = false;
                                break;
                            }
                        }
                    }
                }
            }
        }
        catch (e) {
            if (e.name === 'AbortError') {
                return;
            }
            console.error(e);
        }
    }

    function restart() {
        start(...reqParam.value);
    }

    function stop() {
        if (controller) {
            isLoading.value = false; // 主动中止请求
            console.log('✅ SSE 已主动断开');
            controller.abort();
        }
    }

    return { content, isLoading, start, restart, contentMap, stop, id: resId, dataArr };
}
```

## 复制到剪切板

```javascript
export function copyClipboard(text) {
  const { message } = createDiscreteApi(['message']);
  try {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        message.success('复制成功');
      }).catch(() => {
        message.error('复制失败');
      });
    }
    else {
      const textArea = document.createElement('textarea');
      document.body.appendChild(textArea);

      textArea.value = text; // 假设 shareText.value 是你要复制的字符串
      // 关键修正：将文本框内容全部选中
      textArea.select();
      // 对于移动端设备，可能还需要设置 selectionStart 和 selectionEnd

      textArea.setSelectionRange(0, 99999); // 兼容 iOS
      // 为了不影响页面布局和用户体验，可以将 textarea 隐藏起来
      textArea.style.position = 'fixed';
      textArea.style.top = '0';
      textArea.style.left = '0';

      textArea.style.opacity = '0'; // 或者 display: 'none' / visibility: 'hidden'

      try {
        const successful = document.execCommand('copy');
        if (successful) {
          message.success('复制成功');
        }
        else {
          message.error('复制失败');
        }
      }
      catch (err) {
        message.error('复制失败');
      }
      finally {
        // 复制完成后，移除临时的 textarea 元素
        document.body.removeChild(textArea);
      }
    }
  }
  catch (error) {
    message.error('复制失败');
  }
}
```
