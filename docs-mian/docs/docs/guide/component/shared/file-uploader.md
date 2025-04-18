# FileUploader 文件上传

上传组件，支持裁剪。

## 属性

#options
类型：{Object}
说明：上传配置项
默认值：见下方
{
mode: 'box', // 视图模式 bar: 条形 box: 方框
blockWidth: '120px', // 块宽度，mode 为 box 生效
blockHeight: '120px', // 块高度，mode 为 box 生效
btnText: '上传文件', // 按钮文字
visible: true, // 是否显示上传组件
showAdd: true, // 是否显示新增按钮
showTips: false, // 是否显示上传相关提示
showItems: true, // 是否显示上传列表
multiple: true, // 是否允许多选
fileLimit: 4, // 最大文件个数 设为 0 表示不检查个数
fileBytes: 5 _ 1024 _ 1024, // 单文件最大允许大小，单位 Byte

accepts: 'jpg,jpeg,png,webp', // 允许上传的文件格式
mimeTypes: 'image/_', // 媒体类型，影响选择框中文件的显示，图片一般用 image/_，word 文件一般用 application/octet-stream
filenameLength: 16, // 允许的文件名最大长度
capture: '', // 捕获类型 camera：相机 camcorder：摄像机 microphone：录音

action: '/file/upload', // 上传接口地址
codeKey: 'code', // 上传接口返回成功码的 code 名
successCode: 0, // 上传成功后的 code
urlGet: () => '', // 必须实现此方法，返回上传成功后服务器的文件地址(url)
urlFullGet: () => '', // 必须实现此方法，返回完整可访问的文件地址(urlFull)
name: 'file', // 上传文件 name
headers: {}, // 上传 header 头信息
extraData: {}, // 上传附带的其他参数

crop: false, // 是否启用裁剪
cropRatio: 1, // 裁剪比例 auto：表示任意比例
cropBoxResizable: true, // 裁剪框是否可以改变大小
imageMinSize: false, // 允许上传的图片最小尺寸 [50,50], false 表示不校验
chunked: false, // 是否启用分片上传
chunkSize: 5 _ 1024 _ 1024 // 分片大小 Byte
}
#files-list
类型：{Array}
说明：初始文件列表，用于回显数据
默认值：[] 格式如下
{
url: {String}, // 文件路径
name: {String} // 文件名
}
#disabled
类型：{Boolean}
说明：是否禁用上传
默认值：false
#before-read
类型：{Function}
说明：上传文件之前的钩子
默认值：() => true
TIP

上传前校验，返回 true 表示校验通过，返回 false 表示校验失败。
支持返回 Promise 对 file 对象进行自定义处理。注意：此处的 file 对象不是原生 File, 获取原生 File 对象使用 file.source.source
beforeRead(file) {
return new Promise(resolve => {
file.name = '修改后的名字'
console.log('原生 File:', file.source.source)
resolve(file)
})
}

## 方法

#getUploadedFiles
参数：无
返回值：{Array}
说明：获取已上传文件的列表
{
name: {String}, // 名称
size: {Number}, // 大小
type: {String}, // 类型
url: {String}, // 存储地址
urlFull: {String} // 完整存储地址
}
#isInProgress
参数：无
返回值：{Boolean}
说明：当前上传是否正在进行中
#reset
参数：无
返回值：无
说明：重置上传文件列表
#trigger
参数：无
返回值：无
说明：主动触发上传选择框
#uploadBase64File
参数：{String}
返回值：无
说明：主动上传 base64 格式的图片
#uploadOriginFile
参数：{File}
返回值：无
说明：主动上传原生 File 对象

## 事件

#start
说明：当文件上传开始时
回调参数：{Object} file 上传的文件
#success
说明：当文件上传成功时
回调参数：
{Object} file 上传的文件
{Object} result 上传结果
#error
说明：当文件上传失败时
回调参数：
{Object} file 上传的文件
{Object} result 上传结果
#end
说明：当文件上传结束时，无论成功还是失败
回调参数：{Object} file 上传的文件
#delete
说明：当文件被删除时
回调参数：{Object} file 被删除的文件

## 插槽

#default
说明：自定义上传按钮
#tip
说明：自定义上传提示内容，可通过 slot-scope 注入配置参数
<file-uploader>
<template slot="tip" slot-scope="{ opts }">
<section>
<h1>上传的各项参数为：</h1>
<span>{{ opts.accepts }}</span>
<span>{{ opts.capture }}</span>
<span>{{ opts.action }}</span>
<span>{{ opts.fileLimit }}</span>
<span>{{ opts.fileBytes }}</span>
</section>
</template>
</file-uploader>

## 示例

<template>
  <div>
    <file-uploader ref="refUploader" :options="uploader.options" />
    <button style="margin-top: 20px;" @click="getFiles">获取上传的文件列表</button>
  </div>
</template>

<script>
import { FileUploader } from '@fe/packages/components'

export default {
  name: 'FileUploaderExample',
  components: {
    FileUploader
  },
  data() {
    return {
      uploader: {
        options: {
          fileLimit: 10,
          crop: true,
          cropRatio: 16/9,
          fileBytes: 10 * 1024 * 1024
        }
      }
    }
  },
  methods: {
    getFiles() {
      const files = this.$refs.refUploader.getUploadedFiles()
      console.log(files)
    }
  }
}
</script>
