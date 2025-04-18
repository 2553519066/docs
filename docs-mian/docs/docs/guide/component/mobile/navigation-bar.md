# NavigationBar 导航栏

导航栏组件

## 属性

#title
类型：{String}
说明：标题
默认值：''
#backgroundColor
类型：{String}
说明：背景色
默认值：''
#fontColor
类型：{String}
说明：文字色
默认值：''
#left-text
类型：{String}
说明：左侧文本
默认值：''
#right-text
类型：{String}
说明：右侧文本
默认值：''
#left-arrow
类型：{Boolean}
说明：是否显示左侧箭头
默认值：true
#fixed
类型：{Boolean}
说明：是否固定在顶部
默认值：true
#height
类型：{Number|String}
说明：导航栏高度
默认值：48
#bold
类型：{Boolean}
说明：标题文字是否加粗
默认值：false
#border
类型：{Boolean}
说明：是否显示下边框
默认值：true
#intercept-left-click
类型：{Boolean}
说明：是否阻止点击左侧按钮返回
默认值：false
#z-index
类型：{Number}
说明：元素 z-index 值
默认值：100
#scrollable
类型：{Boolean}
说明：是否滚动标题
默认值：false

## 事件

#click-left
说明：点击左侧内容时
回调参数：无
#click-right
说明：点击右侧内容时
回调参数：无

## 插槽

#left
说明：左侧内容
#title
说明：标题
#right
说明：右侧内容

## 示例

<template>
  <navigation-bar title="这是一个可以滚动的标题" :fixed="false" font-color="#fff" background-color="#172C52" scrollable />
</template>

<script>
import { NavigationBar } from '@fe/packages/components'

export default {
  name: 'NavigationBarExample',
  components: {
    NavigationBar
  }
}
</script>
