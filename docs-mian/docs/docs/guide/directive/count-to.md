# 数字动画

用于数字快速滚动动画

## v-count-to

表达式：{Number} 要滚动的目标数值
参数：{Number} 动画持续时间(ms 毫秒)，默认为 800 毫秒
修饰符：无
示例：

<template>
  <div>
    <div v-count-to="723172" />
    <div v-count-to="-120324" />
    <div v-count-to:500="2658" />
  </div>
</template>
