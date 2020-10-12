import React from 'react'

export default function index() {
  return (
    <div>
      # 模版初始化小工具

## 使用方式

npm install -g nic-cli

### h5项目

```shell
nic init h5
```

1. `vue`: `vue + vuex + vue-router + axios + vant`

2. `react`: `react + react-router-dom + mobx(js) + axios + ant-design-mobild`

### WEB端项目

```shell
nic init web
```

1. `vue`: `vue + vuex + vue-router + axios + element-ui`

2. `react`: `react + react-router-dom + mobx(ts) + axios + ant-design`

### 小程序项目

```shell
nic init applet
```

### node项目

```shell
nic init node
```

`node`: `mongodb + express + http + fs + ……`

### 开发注意

`#!/usr/bin/env node` 表示node运行环境；在weindows上开发，请使用`npm link`到系统模块可以使用命令，mac上直接`npm run dev`即可

### 问题

如果你是windows的电脑，请使用`bash`的终端，否则会出现`undefined`的目录的情况，这种问题我是不会负责的，毕竟我是用来服务自己的，还有请尽量使用最新版本

    </div>
  )
}
