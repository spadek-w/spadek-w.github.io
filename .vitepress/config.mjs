import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  outDir: 'zmkj/dist',
  title: '智棉科技文档',
  description: '前端文档',
  // 将从 URL 中删除 .html 后缀
  cleanUrls: true,
  search: {
    provider: 'local',
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '团队', link: '/library-team/' },
      { text: '前端', link: '/library-front/' },
    ],

    sidebar: {
      '/library-team/': [

      ],
      '/library-front/': [
        {
          text: '前端开发环境',
          items: [
            { text: 'VSCode', link: '/library-front/development/VSCode' },
            { text: 'node', link: '/library-front/development/node' },
          ],

        },
        {
          text: 'NPM 私服',
          items: [
            { text: 'Verdaccio', link: '/library-front/npm/verdaccio' },
            { text: 'Verdaccio-服务器发包', link: '/library-front/npm/server' },
          ],
        },
        {
          text: '工具函数',
          items: [

            { text: '正则', link: '/library-front/toolFn/regular' },

          ],
        },
        {
          text: '日常问题',
          items: [
            { text: '小程序兼容问题', link: '/library-front/question/wxapp' },
          ],
        },
        {
          text: '设计规范',
          items: [
            { text: '颜色', link: '/library-front/design/color' },
            { text: 'element-plus', link: '/library-front/design/element-plus' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/spadek-w/spadek-w.github.io' },
    ],
  },
})
