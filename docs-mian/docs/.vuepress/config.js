module.exports = {
  // 添加标题和描述
  title: 'Vue Press',
  description: 'description of docs',
  // 设置 favicon.ico 图标
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    // 顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: 'API文档', link: '/docs/guide/tool/date.html' },
      {
        text: '当前版本v2.812',
        link: 'javascript:void(0);', // 使用无效链接
        click: (event) => {
          event.preventDefault() // 阻止默认跳转
          console.log('External link clicked')
        }
      }
    ],
    // 侧边栏
    sidebar: {
      '/docs/guide/': [
        {
          title: '图标',
          collapsable: false, // 可选的, 默认值是 true,
          children: ['icon/svg']
        },
        {
          title: '工具',
          collapsable: false, // 可选的, 默认值是 true,
          children: [
            'tool/date',
            'tool/encrypt',
            'tool/env',
            'tool/file',
            'tool/is',
            'tool/math',
            'tool/qs',
            'tool/map',
            'tool/util'
          ]
        },
        {
          title: '指令',
          collapsable: false, // 可选的, 默认值是 true,
          children: [
            'directive/clickaway',
            'directive/draggable',
            'directive/resizable',
            'directive/sticky',
            'directive/waves',
            'directive/spinning',
            'directive/count-to'
          ]
        },
        {
          title: '组件',
          collapsable: false, // 可选的, 默认值是 true,
          children: [
            {
              title: 'PC端',
              collapsable: false, // 可选的, 默认值是 true,
              children: ['component/desktop/z-tree', 'component/desktop/icons-picker']
            },
            {
              title: '移动端',
              collapsable: false, // 可选的, 默认值是 true,
              children: [
                'component/mobile/navigation-bar',
                'component/mobile/post-editer',
                'component/mobile/scroll-box',
                'component/mobile/scroll-list',
                'component/mobile/select-field',
                'component/mobile/tree-field',
                'component/mobile/search-page',
                'component/mobile/tab-swiper'
              ]
            },
            {
              title: '通用',
              collapsable: false, // 可选的, 默认值是 true,
              children: [
                'component/shared/audio-viewer',
                'component/shared/video-viewer',
                'component/shared/image-viewer',
                'component/shared/e-charts',
                'component/shared/rich-editer',
                'component/shared/state-prompt',
                'component/shared/fab-button',
                'component/shared/file-uploader',
                'component/shared/get-captcha',
                'component/shared/mix-editer',
                'component/shared/strength-tip',
                'component/shared/svg-icon'
              ]
            }
          ]
        }
      ],
      '/': ['']
    }
  },
  base: '/', // 如果你的站点部署在 my-project 子路径下
  devServer: {
    // 启用或禁用热模块替换（HMR）
    hot: true,
    // 当热模块替换失败时，强制页面刷新
    hotOnly: false,
    // 配置热刷新的日志级别
    clientLogLevel: 'info'
  }
}
