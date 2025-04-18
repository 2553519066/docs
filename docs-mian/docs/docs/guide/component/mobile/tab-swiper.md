# TabSwiper 滑动选项卡

全屏选项卡切换组件，封装了滑动切换等功能

## 属性

#items
类型：{Array<Object>}
说明：选项卡列表
默认值：[]
TIP

列表项的默认格式为 { name: 选项卡名称, slot: 选项卡插槽名 }

#hide-tabs
类型：{Boolean}
说明：是否隐藏选项卡标签
默认值：false
#swipe-height
类型：{String}
说明：内容块的高度
默认值：'auto'
#tabs-type
类型：{String}
line line 风格
card card 风格
说明：选项卡样式风格类型
默认值：'line'
#border
类型：{Boolean}
说明：是否显示选项卡标签的下边框
默认值：true
TIP

只在 tabsType 为 line 时生效

#tick-color
类型：{String}
说明：标签主题色
默认值：#DC2E1F

## 方法

#swipeTo
参数：{Number} index 索引
返回值：无
说明：滑动到指定索引的标签卡

## 事件

#change
说明：标签卡切换时
回调参数：{Object} item 当前标签数据

## 插槽

#自定义插槽
说明：由 items 中的 slot 字段指定

## 示例

<template>
  <tab-swiper :items="items">
    <div slot="yjzj">我是意见征集</div>
    <div slot="sqhd">我是社区活动</div>
    <div slot="llq">我是邻里圈</div>
  </tab-swiper>
</template>

<script>
import { TabSwiper } from '@fe/packages/components'

export default {
  name: 'TabSwiperExample',
  components: {
    TabSwiper
  },
  data() {
    return {
      items: [
        {
          name: '意见征集',
          slot: 'yjzj'
        },
        {
          name: '社区活动',
          slot: 'sqhd'
        },
        {
          name: '邻里圈',
          slot: 'llq'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.swipe-item {
  padding: 40px;
}
</style>
