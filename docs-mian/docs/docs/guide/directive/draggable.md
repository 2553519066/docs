# 拖拽

使组件可拖拽

## v-draggable

表达式：无
参数：{String} 拖拽目标
parent 拖拽父节点
child 拖拽第一个子节点
self 拖拽自身，默认值
修饰符：无
说明：使任意组件可拖拽
示例：
<template>

  <div>
    <el-button v-draggable type="primary">拖拽我</el-button>
    <div class="box">
      <el-button v-draggable:parent type="primary">拖拽我的父容器</el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box {
  width: 400px;
  height: 400px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
}
.el-button {
  transition: none;
}
</style>
