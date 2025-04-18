# TreeField 树选择

树型数据选择组件，可用于省市区、分类选择等。

## 属性

#value/v-model
类型：{Array}
说明：表单值
默认值：[]
#placeholder
类型：{String}
说明：占位文字
默认值：'请选择'
#items
类型：{Array}
说明：父子 id 关系的待选项
默认值：[]
TIP

当设置了 lazy-load 时，此属性将被忽略

#keys
类型：{Object}
说明：配置选项数据的属性名
默认值：见下方
{
label: 'name', // 标签名
value: 'id', // 标签值
parentValue: 'parentId', // 父标签值，lazyLoad 的数据无需配置
disabled: 'disabled' // 是否禁止选择
}
#disabled
类型：{Boolean}
说明：是否禁用
默认值：false
#free-checked
类型：{Boolean}
说明：是否允许自由选择层级
默认值：true
#lazy-load
类型：{Function}
说明：动态加载数据的方法
默认值：null
回调参数：
{Object} node 点击的选项数据
{Function} resolve 数据加载完成的回调
WARNING

resolve 必须调用，参数为子选项列表数据

#show-all-levels
类型：{Boolean}
说明：是否显示选中标签名称的完整路径
默认值：false
#separator
类型：{String}
说明：选项分隔符
默认值：'/'
TIP

show-all-levels 为 true 时，此属性才起作用

#tick-color
类型：{String}
说明：标签的主题色
默认值：#DC2E1F

## 事件

#confirm
说明：点击确定时
回调参数：{Array} value 选中值的集合
#cancel
说明：点击取消时
回调参数：无

## 插槽

#default
说明：默认插槽为 Field 组件，可通过 slot-scope 注入标签显示名
示例：
<tree-field>
<template slot-scope="{ valueShow }">
<van-cell :title="valueShow">
</template>
</tree-field>

## 示例

<template>
  <div>
    <tree-field v-model="ids" :lazy-load="lazyLoad" label="异步加载" :keys="{ label: 'label', value: 'value' }" />
    <tree-field v-model="ids2" :items="items" label="同步加载" :keys="{ label: 'name', value: 'id', parentValue: 'pid' }" />
  </div>
</template>

<script>
import { TreeField } from '@fe/packages/components'

export default {
  name: 'TreeFieldExample',
  components: {
    TreeField
  },
  data() {
    return {
      ids: [],
      lazyLoad(node, resolve) {
        setTimeout(() => {
          const n = 8
          const a = []
          for (let index = 0; index < n; index++) {
            const id = ((node && node.value) || '') + index
            a.push({ value: id, label: '节点' + id })
          }
          resolve(node && node.value.length >= 4 ? [] : a)
        }, 100)
      },

      ids2: [],
      items: [
        { id: 'yizhi', pid: 'shejiyuanze', name: '一致' },
        { id: 'fankui', pid: 'shejiyuanze', name: '反馈' },
        { id: 'xiaolv', pid: 'shejiyuanze', name: '效率' },
        { id: 'kekong', pid: 'shejiyuanze', name: '可控' },
        { id: 'shejiyuanze', pid: 'zhinan', name: '设计原则' },
        { id: 'cexiangdaohang', pid: 'daohang', name: '侧向导航' },
        { id: 'dingbudaohang', pid: 'daohang', name: '顶部导航' },
        { id: 'daohang', pid: 'zhinan', name: '导航' },
        { id: 'zhinan', name: '指南' },
        { id: 'layout', pid: 'basic', name: 'Layout 布局' },
        { id: 'basic', pid: 'zujian', name: 'Basic' },
        { id: 'radio', pid: 'form', name: 'Radio 单选框' },
        { id: 'checkbox', pid: 'form', name: 'Checkbox 多选框' },
        { id: 'input', pid: 'form', name: 'Input 输入框' },
        { id: 'input-number', pid: 'form', name: 'InputNumber 计数器' },
        { id: 'form', pid: 'zujian', name: 'Form' },
        { id: 'table', pid: 'data', name: 'Table 表格' },
        { id: 'tag', pid: 'data', name: 'Tag 标签' },
        { id: 'data', pid: 'zujian', name: 'Data' },
        { id: 'alert', pid: 'notice', name: 'Alert 警告' },
        { id: 'notice', pid: 'zujian', name: 'Notice' },
        { id: 'menu', pid: 'navigation', name: 'NavMenu 导航菜单' },
        { id: 'tabs', pid: 'navigation', name: 'Tabs 标签页' },
        { id: 'navigation', pid: 'zujian', name: 'Navigation' },
        { id: 'dialog', pid: 'others', name: 'Dialog 对话框' },
        { id: 'tooltip', pid: 'others', name: 'Tooltip 文字提示' },
        { id: 'others', pid: 'zujian', name: 'Others' },
        { id: 'zujian', name: '组件' },
        { id: 'axure', pid: 'ziyuan', name: 'Axure Components' },
        { id: 'sketch', pid: 'ziyuan', name: 'Sketch Templates' },
        { id: 'jiaohu', pid: 'ziyuan', name: '组件交互文档' },
        { id: 'ziyuan', name: '资源' }
      ]
    }
  }
}
</script>
