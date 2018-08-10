# 绩效考核 V2.0

> 绩效考核 RESTful API Server

## using :

- express
- Mysql + Sequelize
- Babel
- underscore
- moment


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9800
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run pro

# 查看运行状态（如果有'node app.js'出现则说明正在后台运行）：
$ ps aux|grep app.js

# 查看运行日志
$ cat logs/out.log

# 监控运行状态
$ tail -f logs/out.log
```

-----------------------


## 目录说明

```bash
.
├── README.md
├── .babelrc                # Babel 配置文件
├── .gitignore              # Git 忽略文件列表
├── package.json            # 描述文件
├── pm2.json                # pm2 部署示例文件
├── src                     # 源代码目录，编译后目标源代码位于 dist 目录
│   ├── app.js              # 入口文件
│   ├── config.js           # 主配置文件（*谨防泄密！）
│   ├── utils               # 工具目录
│       └── index.js        # 公共函数等
│   ├── lib                 # 库目录
│   ├── routers             # 路由 与controllers交互(一个router可以对应多个controllers)
│   ├── controllers         # 控制器 与model，router交互(一个controllers可以对应多个service)
│   ├── services            # 服务 与model，controllers交互(一个service可以对应多个model)
│   └── models              # 模型（一个数据表对应一个model）
└── logs                    # 日志目录

