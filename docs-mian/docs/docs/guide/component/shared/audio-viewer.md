# AudioViewer 音频播放

音频查看组件，封装了音频播放等功能。

## 属性

#audios
类型：{String|Array<String>}
说明：音频 url
默认值：[]
WARNING

音频地址必须为完整可访问的地址

#show-name
类型：{Boolean}
说明：是否显示音频名称
默认值：true
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
  <audio-viewer :audios="audios" />
</template>

<script>
import { AudioViewer } from '@fe/packages/components'

export default {
  name: 'AudioViewerExample',
  components: {
    AudioViewer
  },
  data() {
    return {
      audios: [
        'http://192.168.11.188:10085/examples/static/1.mp3',
        'http://192.168.11.188:10085/examples/static/1.mp3',
        'http://192.168.11.188:10085/examples/static/1.mp3'
      ]
    }
  }
}
</script>
