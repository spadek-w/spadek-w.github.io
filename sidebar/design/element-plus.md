# element-plus 修改主题颜色

按照官方文档所说有4中方式

## 全部导入

> /assets/element/index.scss

``` Scss
@forward 'element-plus/theme-chalk/src/common/var.scss' with (
  $colors: (
    'primary': (
      'base': #145DFF,
    ),
    'success': (
      'base': #00C8A0,
    ),
    'warning': (
      'base': #FF5050,
    ),
    'danger': (
      'base': #FF5050,
    ),
    'error': (
      'base': #db2828,
    ),
    'info': (
      'base': #42b8dd,
    ),
  ),
  $button-padding-horizontal: (
    'default': 80px,
  )
);
// 如果只是按需导入，则可以忽略以下内容。
// 如果你想导入所有样式:
// 这个写在第一行会报错
@use "element-plus/theme-chalk/src/index.scss" as *;
```

2、在main.js中导入`/assets/element/index.scss`

### 疑问

> 文档中所说在 element-plus scss 文件之前导入element/index.scss以避免 sass 混合变量的问题，因为我们需要通过你的自定义变量生成 light-x

实际测试时发现

``` JavaScript
// 这样并不生效
import './assets/element/index.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
```

``` JavaScript
// 这样才生效

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import './assets/element/index.scss'
```

## 按需导入

> /assets/element/index.scss

``` Scss
@forward 'element-plus/theme-chalk/src/common/var.scss' with (
  $colors: (
    'primary': (
      'base': #145DFF,
    ),
    'success': (
      'base': #00C8A0,
    ),
    'warning': (
      'base': #FF5050,
    ),
    'danger': (
      'base': #FF5050,
    ),
    'error': (
      'base': #db2828,
    ),
    'info': (
      'base': #42b8dd,
    ),
  ),
  $button-padding-horizontal: (
    'default': 80px,
  )
);
// 如果只是按需导入，则可以忽略以下内容。
// 如果你想导入所有样式:
// 这个写在第一行会报错
// @use "element-plus/theme-chalk/src/index.scss" as *;
```

参考vite写法 有2个插件 unplugin-vue-components、unplugin-element-plus

``` JavaScript
// 来着官方文档 https://element-plus.org/zh-CN/guide/theming.html
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 你也可以使用 unplugin-vue-components
// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// 或者使用 unplugin-element-plus
import ElementPlus from 'unplugin-element-plus/vite'

// vite.config.ts
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "~/assets/element/index.scss" as *;`,
      },
    },
  },
  plugins: [
    vue(),
    // use unplugin-vue-components
    // Components({
    //   resolvers: [
    //     ElementPlusResolver({
    //       importStyle: "sass",
    //       // directives: true,
    //       // version: "2.1.5",
    //     }),
    //   ],
    // }),
    // 或者使用 unplugin-element-plus
    ElementPlus({
      useSource: true,
    }),
  ],
})
```

## 配合蓝湖

以上面操作而言可能会和设计颜色不统一。

参考以 `#145DFF`《蓝色》 element-plus 生成的默认主题色结构

``` Scss
// 示例
--el-color-primary: #145DFF;
--el-color-primary-light-3: #5b8eff;
--el-color-primary-light-5: #8aaeff;
--el-color-primary-light-7: #b9ceff;
--el-color-primary-light-8: #d0dfff;
--el-color-primary-light-9: #e8efff;

```

以上依次生成6个颜色值

所以第三中方式css变量直接修改

建立`zmColorVariables`.scss、.less、.css文件并引入

``` scss
--el-color-primary: #145DFF;
--el-color-primary-light-3: #5b8eff;
--el-color-primary-light-5: #8aaeff;
--el-color-primary-light-7: #b9ceff;
--el-color-primary-light-8: #d0dfff;
--el-color-primary-light-9: #e8efff;
```
