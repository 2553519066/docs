# 外部点击

用于监听组件外部点击事件

## v-clickaway

表达式：{Function} listener 点击后执行的函数
参数：无
修饰符：无
示例：
<template>

  <div v-clickaway="onClickaway" style="padding: 20px;">
    <el-button type="success" @click.stop="msg = '你点击了按钮'">{{ msg }}</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '点击此处'
    }
  },
  methods: {
    onClickaway() {
      this.msg = '你点击了按钮外部'
    }
  }
}
</script>
