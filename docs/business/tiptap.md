# [tiptap](https://tiptap.dev/docs)


## 常用方法
```javascript

import { useEditor } from '@tiptap/vue-3';
import { debounce } from 'lodash-es';

const editor = useEditor({
    content: '',
    extensions,
    editorProps: {
        attributes: {
            class: 'prose prose-invert focus:outline-none'
        },
        scrollMargin: 380
    },
    onUpdate: debounce(() => {
        handleSaveChapter();
    }, 2000)
});

// 获取内容
editor.getText();
editor.getJSON();
editor.getHTML();
generateText(json, extensions);
generateHTML(json, extensions);
// 添加内容
editor.commands.insertContent(content.value);
editor.commands.setContent(props.chapter.content);
editor.commands.insertContentAt(pos, '<extend-float-dialog />');
// 常见操作
editor.commands.toggleBold();
editor.commands.redo();
editor.commands.undo();
props.editor.commands.toggleStrike();
props.editor.commands.toggleBold();
//  分割块 将一个p标签分成两个p标签
editor.commands.splitBlock();
// 选中指定选取
editor.commands.setTextSelection({ from, to: docEnd });
// 选中文本 
const selectedText = creationState.selection.content;
const doc = props.editor.state.doc;
const { start, end } = creationState.selection;
const text1 = doc.textBetween(Math.max(0, start - 500), start);
const text2 = doc.textBetween(end, Math.min(doc.content.size, end + 500));

```
