# ScrollList 长列表

列表组件，封装了下拉刷新、分页加载、异常处理等功能。

TIP

该组件应搭配 ScrollBox 组件使用，以达到最佳体验，例如自动恢复滚动位置。
组件内部默认不会加载数据，需要手动调用组件的方法 loadStart

## 属性

#url
类型：{String}
说明：请求的 url 地址
默认值：''
#params
类型：{Object}
说明：请求携带的参数
默认值：{}
#method
类型：{String}
说明：请求的方法
默认值：'get'
#payload
类型：{String}
params 通过 url 携带
data 通过 body 携带
说明：携带参数的方式
默认值：'params'
#transform-result
类型：{Function}
说明：对返回结果进行转换
默认值：res => { data: [], total: 100 }
WARNING

如果返回的结果不是{ data: 结果集, total: 总数 }这种格式，必须使用此函数将其转换到此格式

#disable-pull-refresh
类型：{Boolean}
说明：是否禁用下拉刷新
默认值：false
#disable-pagination
类型：{Boolean}
说明：是否禁用分页加载
默认值：false
#item-border
类型：{Boolean}
说明：是否显示 item 下边框线
默认值：false
#columns
类型：{Number}
说明：展示成多少列
默认值：1
#gutter-col
类型：{Number}
说明：列间距
默认值：0
#gutter-row
类型：{Number}
说明：行间距
默认值：0
#page-keys
类型：{Object}
说明：配置分页参数的属性名
默认值：{ pageNum: 'pageNum', length: 'length' }
#show-skeleton
类型：{Boolean}
说明：是否显示骨架屏
默认值：true
#skeleton-config
类型：{Object}
说明：配置骨架屏的参数
默认值：如下
{
title: true, // 是否显示标题占位图
titleWidth: '60%', // 标题占位图宽度
row: 2, // 段落占位图行数
rowWidth: ['100%', '80%', '50%'], // 段落占位图宽度，可传数组来设置每一行的宽度
avatar: false, // 是否显示头像占位图
animate: true, // 是否开启动画
avatarSize: '40px', // 头像占位图大小
avatarShape: 'round' // 头像占位图形状，可选值为 square
}

## 方法

#loadStart
参数：无
返回值：无
说明：开始加载数据
#reset
参数：无
返回值：无
说明：重置列表数据及状态

## 事件

#success
说明：列表加载数据成功
回调参数：{Object} result 返回的数据对象，格式如下
{
res: {Object}, // 当前分页请求的结果
data: {Array}, // 全部列表数据
params: {Object}, // 请求携带的参数
url: {String}, // 请求的 url
finished: {Boolean} // 是否已加载完所有数据
}
#error
说明：列表加载数据失败
回调参数：{Object} exception 异常信息

## 插槽

#default
说明：列表块，数据通过 slot-scope 传递
字段：{Object} row 列表块依赖的数据
#header
说明：列表头部内容
#footer
说明：列表底部内容

## 示例

<template>
  <scroll-box height="500px">
    <scroll-list 
      ref="refList" 
      :url="list.url" 
      :params="list.params" 
      :page-keys="{ pageNum: 'start' }" 
      :item-border="false"
      :transform-result="transformData"
    >
      <template slot-scope="scope">
        <div class="cell-item">
          <span class="type">{{ scope.row.groupTypeId }}</span>
          <span class="name">{{ scope.row.title }}</span>
          <span class="time">{{ scope.row.createTime }}</span>
        </div>
      </template>
    </scroll-list>
  </scroll-box>
</template>

<script>
import { ScrollBox, ScrollList } from '@fe/packages/components'

export default {
  name: 'ScrollListExample',
  components: {
    ScrollBox,
    ScrollList
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
  mounted() {
    this.getListData()
  },
  methods: {
    getListData() {
      this.$refs.refList.loadStart()
    },
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
