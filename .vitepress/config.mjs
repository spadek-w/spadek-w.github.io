import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  outDir: 'zmkj/dist',
  title: '智棉科技前端文档',
  description: '前端文档',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '示例', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: '示例',
        items: [
          { text: 'Markdown 示例', link: '/markdown-examples' },
          { text: 'Runtime API 示例', link: '/api-examples' },
        ],
      },
      {
        text: '前端开发环境',
        items: [
          { text: 'node', link: '/sidebar/development/node' },
          { text: 'nvm', link: '/sidebar/development/nvm' },
          { text: 'eslint', link: '/api-examples' },
        ],

      },
      {
        text: 'NPM 私服',
        items: [
          { text: 'Verdaccio', link: '/sidebar/npm/verdaccio' },
          { text: 'Verdaccio-服务器发包', link: '/sidebar/npm/server' },
        ],
      },
      {
        text: '基础进阶',
        items: [
          { text: 'css技巧', link: '/sidebar/base/css' },
          { text: 'H5屏幕适配', link: '/sidebar/base/h5' },
          { text: 'TypeScript', link: '/sidebar/base/typescript' },
          { text: '常用正则表达式', link: '/sidebar/base/regular' },
          { text: '小程序兼容问题', link: '/sidebar/base/compatibility' },
        ],
      },
      {
        text: '设计规范',
        items: [
          { text: '颜色', link: '/sidebar/design/color' },
          { text: 'element-plus', link: '/sidebar/design/element-plus' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
})
