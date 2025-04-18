# FabButton 悬浮按钮

悬浮按钮组件，可定义多个按钮。

## 属性

#actions
类型：{Array<Object>}
说明：按钮组定义项
默认值：[]
TIP

默认格式为 {name: 名称，icon: 图标, tooltip: 浮动提示, color: 颜色, disabled: 禁用, buttonClass: 按钮自定义 class 名}

#size
类型：{String|Number}
说明：按钮尺寸
默认值：50px
#disabled
类型：{Boolean}
说明：是否禁用按钮
默认值：false
#default-color
类型：{String}
说明：默认按钮颜色
默认值：'#3985ff'
#default-icon
类型：{String}
说明：默认按钮图标
默认值：''
WARNING

图标依赖的是 SvgIcon 组件

#start-open
类型：{Boolean}
说明：是否在首次自动展开
默认值：false
#position-style
类型：{Object}
说明：按钮悬浮的位置样式
默认值：{ right: '2vh', bottom: '2vh' }
#direction
类型：{String}
up 上
down 下
left 左
right 右
说明：按钮组展开方向
默认值：'up'

## 事件

#click
说明：点击按钮时
回调参数：{Object} event 点击的按钮事件信息

## 插槽

#default
说明：基础按钮

## 示例

<template>
  <fab-button :actions="actions" :position-style="{ bottom: '10vh', right: '10vh' }" />
</template>

<script>
import { FabButton } from '@fe/packages/components'

export default {
  name: 'FabButtonExample',
  components: {
    FabButton
  },
  data() {
    return {
      actions: [
        {
          name: '消息',
          icon: 'message'
        },
        {
          name: '编辑',
          icon: 'draw'
        },
        {
          name: '巡检',
          icon: 'inspect'
        },
        {
          name: '裁剪',
          icon: 'screenshot'
        }
      ]
    }
  }
}
</script>
