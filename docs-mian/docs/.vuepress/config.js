module.exports = {
  // 添加标题和描述
  title: 'MY BLOG',
  description: 'description of my blog',
  // 设置 favicon.ico 图标
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    // 顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: 'CSDN', link: '' },
      { text: 'Github', link: '' }
    ],
    // 侧边栏
    sidebar: [
      {
        title: '分类1', // 必要的
        path: '/category1/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 是否可折叠，默认为true
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: [
          {
            title: '分类1-1', // 必要的
            path: '/category1/one' // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          },
          {
            title: '分类1-2', // 必要的
            path: '/category1/two' // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          }
        ]
      },
      {
        title: '分类2',
        path: '/category2/',
        collapsable: true,
        children: [
          {
            title: '分类2-1',
            path: '/category2/one'
          },
          {
            title: '分类2-2',
            path: '/category2/two'
          }
        ]
      }
    ]
  },
  base: '/' // 如果你的站点部署在 my-project 子路径下
}
