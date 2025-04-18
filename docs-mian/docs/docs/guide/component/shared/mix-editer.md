# MixEditer 图文编辑

图文编辑组件，适合移动端使用。

## 属性

#value/v-model
类型：{String}
说明：编辑的内容
默认值：''
TIP

JSON 字符串格式为："[{type: 1, value: 图片地址}, { type: 2, value: 文本 }]"，超出限定字符的文字将被抹除。

#mode
类型：{String}
normal 图片与文字按自然顺序展示
divide 图片与文字分离展示
text 只显示文字
image 只显示图片
说明：排版模式
默认值：'normal'
#image-width
类型：{String}
说明：图片展示宽度
默认值：'100%'
#image-height
类型：{String}
说明：图片展示高度
默认值：'auto'
#readonly
类型：{Boolean}
说明：只读
默认值：false
#disabled
类型：{Boolean}
说明：禁用编辑，样式呈灰色
默认值：false
#gather-text
类型：{Boolean}
说明：是否将多段文字聚合展示
默认值：false
#text-limit
类型：{Number}
说明：文字截取的长度，gatherText 为 true 时有效，为 0 时表示不截取
默认值：100
#max-length
类型：{Number}
说明：最大字符数
默认值：4096

## 方法

#reset
参数：无
返回值：无
说明：重置编辑器中的内容

## 事件

#write
说明：正在输入时
回调参数：{String} content 已输入的内容

## 示例

<template>
  <mix-editer v-model="content" />
</template>

<script>
import { MixEditer } from '@fe/packages/components'

export default {
  name: 'MixEditerExample',
  components: {
    MixEditer
  },
  data() {
    return {
      content: ''
    }
  }
}
</script>
