# ECharts 图表

可视化图表组件，基于 ECharts。

## 属性

#width
类型：{String}
说明：容器宽度
默认值：'100%'
#height
类型：{String}
说明：容器高度
默认值：'400px'
#theme-config
类型：{String}
说明：主题配置描述
默认值：null
WARNING

要使用对应的主题，可以从官网主题构建生成对应的 json 文件，然后引入该 json 为 js 对象

## 方法

#setOption
参数：{Object} option
返回值：无
说明：设置图表参数并渲染, 等价于 chartIns.setOption 方法
this.$refs.refCharts.setOption(option)

## 事件

#ready
说明：容器初始化完成
回调参数：{Object} chartIns 图表实例

## 示例

<template>
  <e-charts ref="refCharts" width="100%" height="600px" />
</template>

<script>
import { ECharts } from '@fe/packages/components'
import chartOptions from './constants/chart' 

export default {
  name: 'EChartsExample',
  components: {
    ECharts
  },
  mounted() {
    this.$refs.refCharts.setOption(chartOptions)
  }
}
</script>
