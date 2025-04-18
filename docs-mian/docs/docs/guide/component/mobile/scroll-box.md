# ScrollBox 滚动容器

滚动容器组件，自动记录滚动位置

## 属性

#height
类型：{String}
说明：容器高度
默认值：'auto'

## 事件

#scroll
说明：内容滚动时
回调参数：{Number} scrollTop 垂直滚动的高度

## 插槽

#default
说明：滚动的内容

## 示例

<template>
  <scroll-box height="100vh">
    <div>
      <div v-for="(item, index) in new Array(100).fill(0)" :key="index" class="item">{{ index }}</div>
    </div>
  </scroll-box>
</template>

<script>
import { ScrollBox } from '@fe/packages/components'

export default {
  name: 'ScrollBoxExample',
  components: {
    ScrollBox
  }
}
</script>

<style lang="scss" scoped>
.item {
  margin-bottom: 2px;
  background-color: #eee;
  font-size: 40px;
  text-align: center;
  padding: 40px;
}
</style>
