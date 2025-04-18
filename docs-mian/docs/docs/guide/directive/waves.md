# 波纹效果

点击组件时，出现波纹效果

## v-waves

表达式：{Object} 配置参数，详情如下
{HTMLElement} ele 波纹作用元素, 默认为自身
{String} type 扩散方式
hit 点击位置扩散，默认值
center 中心点扩散
{String} color 波纹颜色
参数：无
修饰符：无
示例：
<template>
<el-button v-waves="{type: 'center'}" type="primary">点击我</el-button>
</template>
