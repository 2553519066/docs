# sticky 布局

当组件即将离开屏幕时，使其固定在顶部

## v-sticky

表达式：{Object} 配置参数，详情如下
{Number} stickyTop 距离顶部的距离阈值
{Number} zIndex 浮动时的层级索引
参数：无
修饰符：无
说明：页面滚动时，附着在窗口顶部
示例：
<template>

  <div style="height: 2000px;">
    <el-button v-sticky type="primary">滚动页面观察</el-button>
  </div>
</template>
