# PostEditer 回复

回复组件，用于回复、评论等地方

## 属性

#placeholder
类型：{String}
说明：输入框占位文本
默认值：'说点什么...'
#btn-text
类型：{String}
说明：按钮文本
默认值：'发送'
#input-max-length
类型：{Number}
说明：输入框长度限制
默认值：520
#file-limit
类型：{Number}
说明：文件上传个数限制
默认值：5

## 事件

#send
说明：点击右侧按钮时
回调参数：{String} content 文本与文件组成的 json 字符串

## 示例

<template>
  <post-editer @send="onSend" />
</template>

<script>
import { PostEditer } from '@fe/packages/components'

export default {
  name: 'PostEditerExample',
  components: {
    PostEditer
  },
  methods: {
    onSend(jsonCont) {
      console.log('发送的文本：', jsonCont)
    }
  }
}
</script>
