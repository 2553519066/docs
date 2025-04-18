# 加载中

显示组件的加载状态

## v-spinning

表达式：{Boolean} value 是否显示加载
参数：无
修饰符：
lock 锁定容器的滚动
fullscreen 显示为全屏
示例：
<template>
<el-button v-spinning.lock="true" style="width: 200px; height: 50px; position: relative;" type="success">加载中</el-button>
</template>
