# GetCaptcha 验证码

发送验证码组件，封装了倒计时。

## 属性

#cache-key
类型：{String}
说明：缓存名
默认值：'V-Code-Expired'

## 方法

#startCountDown
参数：{Number} seconds 倒计时持续时间(秒)
返回值：无
说明：手动触发按钮的倒计时

## 事件

#click
说明：点击按钮时
回调参数：无
#change
说明：倒计时变化时
回调参数：{Object} 倒计时内容
text 倒计时文字
disabled 是否禁用
seconds 倒计时剩余时间（秒）

## 插槽

#default
说明：默认按钮为 button，可通过 slot-scope 获取当前按钮信息
示例：
<get-captcha>
<template slot-scope="scope">
<van-button :disabled="scope.disabled">{{ scope.text }}</van-button>
</template>
</get-captcha>

## 示例

<template>
  <div style="padding: 40px;">
    <get-captcha ref="refGetCaptcha1" cache-key="code1" @click="send1" />
    <get-captcha ref="refGetCaptcha2" cache-key="code2" style="margin-left: 20px;" @click="send2" />
  </div>
</template>

<script>
import { GetCaptcha } from '@fe/packages/components'

export default {
  name: 'GetCaptchaExample',
  components: {
    GetCaptcha
  },
  methods: {
    send1() {
      setTimeout(res => {
        this.$refs.refGetCaptcha1.startCountDown(60) // 倒计时1分钟后，可重新点击获取验证码
      }, 500)
    },
    send2() {
      setTimeout(res => {
        this.$refs.refGetCaptcha2.startCountDown(120) // 倒计时2分钟后，可重新点击获取验证码
      }, 500)
    }
  }
}
</script>
