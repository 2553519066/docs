---
home: true
heroImage: /logo.png
# heroText: 前端公共包使用文档
tagline: 前端公共包使用文档
actionText: 查看API文档 →
actionLink: /docs/guide/tool/date.html
features:
  - title: 工具
    details: 包含了工具方法
  - title: 指令
    details: 包含了常用指令
  - title: 组件
    details: 包含了桌面端/移动端/两端通用的组件
footer: Copyright © 2025-present HJQ
---

## 安装使用

```sh
# 安装依赖

cnpm i --save @fe/packages
```

## 简单示例

```vue
<template>
  <file-uploader :options="options" />
</template>

<script>
import Vue from 'vue'
import { isEmpty, getTimestamp } from '@fe/packages/utils' // 引入工具函数
import { FileUploader } from '@fe/packages/components' // 引入组件
import directives from '@fe/packages/directives' // 引入指令

directives.forEach((directive) => {
  Vue.use(directive)
})

export default {
  name: 'Example',
  components: {
    FileUploader
  },
  data() {
    return {
      options: {
        crop: true
      }
    }
  },
  mounted() {
    console.log(isEmpty('hello'))
    console.log(getTimestamp(new Date()))
  }
}
</script>
```
