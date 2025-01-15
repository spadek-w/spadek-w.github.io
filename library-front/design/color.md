# 蓝湖设计规范的颜色

## 工具

一些算法给出一个颜色会生成10个颜色的工具

### ant-design

> https://ant-design.antgroup.com/docs/spec/colors-cn#%E8%89%B2%E6%9D%BF%E7%94%9F%E6%88%90%E5%B7%A5%E5%85%B7

``` cmd
npm install @ant-design/colors
```

``` JavaScript
import { generate, presetPalettes } from '@ant-design/colors';

// Generate color palettes by a given color
const colors1 = generate('#145DFF');
const colors2 = generate('#145DFF', {
  theme: 'dark',
  backgroundColor: '#141414',
});
console.log(colors); // ['#E6F7FF', '#BAE7FF', '#91D5FF', ''#69C0FF', '#40A9FF', '#1890FF', '#096DD9', '#0050B3', '#003A8C', '#002766']
console.log(presetPalettes);
/*
{
  red: [...],
  volcano: [...],
  orange: [...],
  gold: [...],
  yellow: [...],
  lime: [...],
  green: [...],
  cyan: [...],
  blue: [...],
  geekblue: [...],
  purple: [...],
  magenta: [...],
}
*/
```

### arco.design

> https://arco.design/palette/list

## primary

``` css
--zm-color-primary:#145DFF;

--zm-color-primary1:#E8F3FF;
--zm-color-primary2:#BEDAFF;
--zm-color-primary3:#95BFFF;
--zm-color-primary4:#6AA1FF;
--zm-color-primary5:#3F80FF;
--zm-color-primary6:#145DFF;
--zm-color-primary7:#1042D2;
--zm-color-primary8:#072CA6;
--zm-color-primary9:#031A79;
--zm-color-primary10:#020D4D;
```

## success

``` css
--zm-color-success:#00C8A0;

--zm-color-success1:#EBFAF7;
--zm-color-success2:#CCF4EC;
--zm-color-success3:#A3EBDC;
--zm-color-success4:#7AE2CD;
--zm-color-success5:#52D9BE;
--zm-color-success6:#00C8A0;
--zm-color-success7:#00A786;
--zm-color-success8:#00876C;
--zm-color-success9:#006853;
--zm-color-success10:#004839;
```

## danger

``` css
--zm-color-warning:#FF5050;

--zm-color-warning1:#FFECE8;
--zm-color-warning2:#FDCDC5;
--zm-color-warning3:#FAACA3;
--zm-color-warning4:#F98981;
--zm-color-warning5:#F76560;
--zm-color-warning6:#FF5050;
--zm-color-warning7:#CB272D;
--zm-color-warning8:#A1161E;
--zm-color-warning9:#770913;
--zm-color-warning10:#4D010A;
```
