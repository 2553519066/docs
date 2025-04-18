# IconsPicker 图标拾取

图标拾取组件

## 属性

#icon/v-model
类型：{String}
说明：已选择的图标名
默认值：''
#readonly
类型：{Boolean}
说明：输入框是否为只读
默认值：true
#disabled
类型：{Boolean}
说明：是否禁用输入框
默认值：false
#placeholder
类型：{String}
说明：占位文本
默认值：'请选择图标'
#popover-width
类型：{String|Number}
说明：弹出层宽度
默认值：'360px'
#uploadable
类型：{Boolean}
说明：是否允许自定义上传
默认值：false

## 事件

#input
说明：图标变化时
回调参数：{Object} event 图标名称或路径

## 示例

<template>
  <div>
    <icons-picker v-model="iconName" popover-width="450" />
  </div>
</template>

<script>
  import { IconsPicker } from '@fe/packages/components'

  export default {
    name: 'IconsPickerExample',
    components: {
      IconsPicker
    },
    data() {
      return {
        iconName: ''
      }
    }
  }
</script>
