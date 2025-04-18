# ZTree 树

树组件，该组件是对 zTree (opens new window)的包装，详细文档(opens new window)

TIP

不使用 element-ui 的 Tree 组件是因为以下原因：

节点数据量过大时会导致卡顿
灵活性不如 zTree
扩展性不如 zTree

## 属性

#setting
类型：{Object}
说明：树的配置项，同 zTree 中的 setting
默认值：{}
#nodes
类型：{Array}
说明：树的初始节点数据集合
默认值：[]
#enable-context-menu
类型：{Boolean}
说明：是否开启下拉菜单支持
默认值：false
#context-menu-options
类型：{Object}
说明：下拉菜单配置项
默认值：{}
文档：jQuery contextMenu(opens new window)
#no-half-style
类型：{Boolean}
说明：是否禁用半选状态样式
默认值：false

## 方法

组件暴露了树实例，使用树实例来调用树控件的内部方法

## 事件

#ready
说明：当组件内部初始化完成后
回调参数：{Object} treeIns 树实例

## 示例

参考项目代码
