# 开发者的约定于规范

## 目录 :

- Restful Api 方式
- 目录结构
- 模块定义
- 常用命名约定
- 函数常用命名
- 注释



### Restful Api 方式

``` javascript
    
    let router = express.Router()
    router
      // 获取列表
      .get('/', (req, res, next) => {
        res.json({code:200})
      })
      // 获取详情
      .get('/:id', (req, res, next) => {
        res.json({code:200})
      })
      // 新增
      .post('/', (req, res, next) => {
        res.json({code:200})
      })
      // 修改
      .put('/:id', (req, res, next) => {
        res.json({code:200})
      })
      // 删除
      .delete('/:id', (req, res, next) => {
        res.json({code:200})
      })
    
```


### 目录结构

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
│   ├── routes              # 路由 与controllers交互(一个router可以对应多个controllers)
│   ├── controllers         # 控制器 与model，router交互(一个controllers可以对应多个service)
│   ├── services            # 服务 与model，controllers交互(一个service可以对应多个model)
│   └── models              # 模型（一个数据表对应一个model）
└── logs                    # 日志目录
```
-----------------------


### 模块定义

```javascript

// example
const User = {
    /**
    * 添加
    */
    add () {
        // runing 
    }
}
export default User


// example more
export const SYSTEM = {
}

export const DB = {
}

```

### 常用命名约定

    全部：all 
    列表：list
    详情：item 
    分页：pege
    页头：header
    页脚：footer 
    标题：title   
    标志：logo 
    侧栏：side-bar
    外套：wrap 
    广告：banner 
    导航：nav 
    子导航：sub-nav 
    菜单：menu 
    子菜单：sub-menu 
    搜索：search 
    滚动：scroll 
    页面主体：main 
    内容：content 
    标签页：tab 
    文章列表：list 
    提示信息：msg 
    小技巧：tips 
    栏目标题：title 
    服务：service 
    热点：hot 
    新闻：news 
    下载：download 
    注册：regsiter 
    状态：status 
    按钮：btn 
    投票：vote 
    合作伙伴：partner 
    版权：copyright 

### 函数常用命名

| 动词 | 含义 | 返回值 |
| ------ | ------ | ------ |
| can | 判断是否可执行某个动作 ( 权限 )	函数返回一个布尔值。 | true：可执行；false：不可执行 |
| has | 判断是否含有某个值	函数返回一个布尔值。 | true：含有此值；false：不含有此值 |
| is | 判断是否为某个值函数返回一个布尔值。 | true：为某个值；false：不为某个值 |
| get | 获取某个值 | 函数返回一个非布尔值 |
| add | 添加 | 添加成功返回对应添加对象 |
| update | 更新 | 更新后返回对应的对象 |
| delete | 删除 | true：删除成功；false：删除失败 |

### 注释

##### 每个函数都应该带有说明
```javascript
    
    export default {
      /**
      * 添加函数
      * @param params
      * @returns {Promise<*>}
      */
      async add (params) {
        return await model.add(params)
      }
    }
    
```

##### 每块逻辑性代码都该带有注释
```javascript
    
    {
      // 如果是负责人的话，则删除
      if (isOwner) {
        return deleteItem()
      }
      // 否则提示不能删除
      msg('不能删除')
    }
    
```