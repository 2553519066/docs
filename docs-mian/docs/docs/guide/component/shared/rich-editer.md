# RichEditer 富文本

富文本编辑组件，该组件是对 tinymce (opens new window)的包装，中文文档(opens new window)

## 属性

#v-model/value
类型：{String}
说明：编辑器默认内容
默认值：''
#toolbar
类型：{Array}
说明：工具栏配置
默认值：['searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indent blockquote undo redo removeformat subscript superscript code codesample', 'hr bullist numlist link image charmap preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen']
#plugins
类型：{Array}
说明：插件栏配置
默认值：['advlist anchor autolink autosave code codesample colorpicker contextmenu directionality emoticons fullscreen hr image imagetools insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount']
#menubar
类型：{String}
说明：菜单栏配置
默认值：'file edit insert view format table'
#width
类型：{String | Number}
说明：编辑器宽度
默认值：360
#height
类型：{String | Number}
说明：编辑器高度
默认值：'auto'
#disabled
类型：{Boolean}
说明：是否禁用
默认值：false
#hide-menus-when-disabled
类型：{Boolean}
说明：当禁用时隐藏操作菜单
默认值：false
#image-uploader-options
类型：{Boolean}
说明：图片上传配置项, 见 FileUploader 组件 options 的参数
默认值：{}

## 方法

#setContent
参数：{String} value
返回值：无
说明：设置编辑器内容
#getContent
参数：无
返回值：{String}
说明：获取编辑器内容

## 事件

#change
说明：当编辑器内容发生变化时
回调参数：{String} value 编辑器内容

## 示例

<template>
  <rich-editer v-model="content" width="600px" height="300px" />
</template>

<script>
import { RichEditer } from '@fe/packages/components'

export default {
  name: 'RichEditerExample',
  components: {
    RichEditer
  },
  data() {
    return {
      content: ''
    }
  }
}
</script>
