# SearchPage 搜索页

搜索页组件，封装了常见搜索功能。

## 属性

#url
类型：{String}
说明：请求的 url 地址
默认值：''
#params
类型：{Object}
说明：请求携带的参数
默认值：{}
#depend-param
类型：{String}
说明：关键字属性名
默认值：'keyword'
#transform-result
类型：{Function}
说明：对返回结果进行转换
默认值：res => { data: [], total: 100 }
WARNING

如果返回的结果不是{ data: 结果集, total: 总数 }这种格式，必须使用此函数将其转换到此格式

#placeholder
类型：{String}
说明：占位文字
默认值：'请输入关键字'
#background
类型：{String}
说明：搜索栏背景色
默认值：''

## 方法

#showModal
参数：无
返回值：无
说明：显示搜索页
#hideModal
参数：无
返回值：无
说明：隐藏搜索页

## 插槽

#default
说明：列表块，数据通过 slot-scope 传递
字段：{Object} row 列表块依赖的数据

## 示例

<template>
  <div>
    <navigation-bar title="待收货" :fixed="false" font-color="#fff" background-color="#172C52">
      <svg-icon slot="right" name="search" size="20px" @click="$refs.refSearch.showModal()" />
    </navigation-bar>
    <search-page 
      ref="refSearch" 
      :url="list.url" 
      :params="list.params" 
      :transform-result="transformData" 
      depend-param="keyword"
    >
      <template slot-scope="scope">
        <div class="cell-item">
          <span class="type">{{ scope.row.groupTypeId }}</span>
          <span class="name">{{ scope.row.title }}</span>
          <span class="time">{{ scope.row.createTime }}</span>
        </div>
      </template>
    </search-page>
  </div>
</template>

<script>
import { SearchPage, NavigationBar, SvgIcon } from '@fe/packages/components'

export default {
  name: 'SearchPageExample',
  components: {
    SearchPage,
    NavigationBar,
    SvgIcon
  },
  data() {
    return {
      list: {
        url: 'http://www.smeyun.com/main/group/content/getPublicExternalPage',
        params: {
          groupId: 1,
          groupTypeId: '427959848852787200'
        }
      }
    }
  },
  methods: {
    transformData({ data }) {
      return {
        code: data.code,
        data: data.page.data,
        total: data.page.recordsTotal
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cell-item {
  padding: 30px;
  background-color: #fafafa;
  margin-bottom: 10px;

  .type {
    background-color: #ff4200;
    padding: 5px 10px;
    border-radius: 10px;
    text-align: center;
    color: #fff;
    margin-right: 20px;
    font-size: 24px;
    vertical-align: middle;
    line-height: 1.5;
  }
  .name {
    font-size: 32px;
    color: #333;
    line-height: 1.5;
  }
  .time {
    font-size: 24px;
    color: #999;
    display: block;
    text-align: left;
    margin-top: 20px;
  }
}
</style>
