# ImageViewer 图片查看

图片查看组件，封装了缩略图放大等功能。

## 属性

#images
类型：{String|Array<String>}
说明：图片 url
默认值：[]
WARNING

图片地址必须为完整可访问的地址

#fit
类型：{String}
fill 拉伸，不保持长宽比
contain 留白，保持长宽比
cover 裁剪，保持长宽比
none 保持原始比例与大小
scale-down 与设置了 none 和 contain 的效果一样，但是选择尺寸更小的那个
说明：图片适应容器的方式
默认值：cover
#width
类型：{String}
说明：缩略图宽度
默认值：'100px'
#height
类型：{String}
说明：缩略图高度
默认值：'100px'

## 示例

<template>
<image-viewer :images="images" />
</template>

<script>
import { ImageViewer } from '@fe/packages/components'

export default {
  name: 'ImageViewerExample',
  components: {
    ImageViewer
  },
  data() {
    return {
      images: [
        'http://192.168.11.188:10085/examples/static/1.jpg',
        'http://192.168.11.188:10085/examples/static/2.jpg',
        'http://192.168.11.188:10085/examples/static/3.jpg'
      ]
    }
  }
}
</script>
