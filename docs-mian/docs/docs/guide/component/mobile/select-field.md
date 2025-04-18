# SelectField 列选择

下拉列选择组件，可用于单选、多选等。

## 属性

#value/v-model
类型：{String|Number|Array<String|Number>}
说明：表单值
默认值：''
WARNING

multiple 为 true 时，值为数组

#items
类型：{Array<Object>}
说明：列表数据
默认值：[]
TIP

列表项的默认格式为 { name: 名称, code: 标识 }

#keys
类型：{Object}
说明：配置选项数据的属性名
默认值：见下方
{
label: 'name', // 标签名
value: 'code', // 标签值
}
#disabled
类型：{Boolean}
说明：是否禁用
默认值：false
#multiple
类型：{Boolean}
说明：是否允许多选
默认值：false
#immediate
类型：{Boolean}
说明：是否选择时立即生效，不需要点击确认按钮
默认值：false

## 事件

#confirm
说明：点击确定时
回调参数：{String|Number|Array<String|Number>} value 选中值
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
    <select-field 
      v-model="type1" 
      :items="items" 
      immediate 
      label="简单选择" 
    />
    <select-field 
      v-model="type2" 
      :items="items" 
      :immediate="false" 
      label="单选确定" 
    />
    <select-field 
      v-model="type3" 
      :items="items" 
      :immediate="false" 
      multiple
      label="多选确定" 
    />
  </div>
</template>

<script>
import { SelectField } from '@fe/packages/components'

export default {
  name: 'SelectFieldExample',
  components: {
    SelectField
  },
  data() {
    return {
      type1: '',
      type2: '',
      type3: '',
      items: [
        {
          code: 1,
          name: '意见征集'
        },
        {
          code: 2,
          name: '社区活动'
        },
        {
          code: 3,
          name: '邻里圈'
        },
        {
          code: 4,
          name: '跳蚤市场'
        }
      ]
    }
  }
}
</script>
