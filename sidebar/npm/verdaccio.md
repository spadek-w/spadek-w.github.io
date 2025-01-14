## Verdaccio 简介

Verdaccio 是一个 Node.js创建的轻量的私有npm proxy registry

使用像 Verdaccio 这样的私有 npm 注册中心是 10 大 NPM 安全最佳之一做法 由开放 Web 应用程序安全项目 (OWASP) 推荐。

注册中心是一个包的存储库，它实现了 CommonJS 兼容包注册表规范，用于读取包的信息。

提供与 npm 客户端 (yarn/npm/pnpm) 兼容的 API。

### 安装

安装CLI

使用 npm
```bash
npm install -g verdaccio
```
或使用 yarn
```bash
yarn global add verdaccio
```
或使用 pnpm
```bash
$> verdaccio
warn --- config file  - /home/.config/verdaccio/config.yaml
warn --- http address - http://localhost:4873/ - verdaccio/3.0.0
```

### 启动
```bash
verdaccio
```

### 在线文档

https://verdaccio.org/zh-CN/docs/what-is-verdaccio
