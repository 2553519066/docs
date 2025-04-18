# StatePrompt 空状态

提示空状态、加载中、成功、失败等信息的组件

## 属性

#state
类型：{String}
loading 加载中
error 数据加载失败
success 数据加载成功
empty-history 历史记录为空
empty-search 搜索结果为空
empty-cart 购物车是空的
no-order 您还没有订单
no-favor 您还没有收藏
no-message 您还没有消息
no-data 暂无数据
no-comment 暂无评论
no-evaluate 暂无评价
no-auth 您没有权限查看
no-page 页面不存在
no-network 网络连接异常
说明：表现类型
默认值：''
#show-retry
类型：{Boolean}
说明：是否显示重试按钮
默认值：false

## 事件

#click
说明：点击重试按钮触发

## 插槽

#default
说明：默认插槽为按钮
#loading
说明：自定义加载中样式

## 示例

<template>
  <div>
    <state-prompt state="loading" />
    <state-prompt state="error" />
    <state-prompt state="empty-history" />
    <state-prompt state="no-order" />
    <state-prompt state="no-auth" />
    <state-prompt state="no-network" show-retry @click="getData" />
  </div>
</template>

<script>
import { StatePrompt } from '@fe/packages/components'

export default {
  name: 'StatePromptExample',
  components: {
    StatePrompt
  },
  methods: {
    getData() {
      console.log('重试')
    }
  }
}
</script>
