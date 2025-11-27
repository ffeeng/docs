---
title: sheet
---


## 安装依赖
```package.json
"@univerjs/core": "^0.12.2",
"@univerjs/preset-sheets-core": "^0.12.2",
"@univerjs/presets": "^0.12.2",
```
## 初始化表格
```vue
<script lang="ts" setup>
  import type { FUniver } from '@univerjs/core/facade';
  import { UniverSheetsCorePreset } from '@univerjs/preset-sheets-core';
  import UniverPresetSheetsCoreZhCn from '@univerjs/preset-sheets-core/locales/zh-CN';

  import {
    createUniver,
    defaultTheme,
    LocaleType,
    merge
  } from '@univerjs/presets';
  import { onBeforeUnmount, onMounted } from 'vue';
  import '@univerjs/presets/lib/styles/preset-sheets-core.css';

  let univerAPIInstance: FUniver | null = null;

  onMounted(() => {
    const { univerAPI } = createUniver({
      locale: LocaleType.EN_US,
      locales: {
        enUS: merge({}, UniverPresetSheetsCoreZhCn)
      },
      theme: defaultTheme,
      presets: [
        UniverSheetsCorePreset({
          container: 'univer'
        })
      ]
    });

    univerAPI.createWorkbook({ name: 'My first workbook' });

    univerAPIInstance = univerAPI;
  });

  onBeforeUnmount(() => {
    univerAPIInstance?.dispose();
    univerAPIInstance = null;
  });
</script>

<template>
  <div id="univer" />
</template>

<style>
#univer {
  height: calc(100vh - 16px);
  overflow: hidden;
}
</style>
```
