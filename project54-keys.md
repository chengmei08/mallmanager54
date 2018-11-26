## Vue-项目-重点

### day-07-重点

#### 01-项目-准备-项目目录说明
1. src/
2. eslinttrc.js ESLint配置文件
3. config/ 服务器配置文件
4. build/ webpack相关文件
#### 02-项目-准备-代码规范-自定义指令-lintfix
1. package.json中的scripts 作用: 简化指令
>  "dev":"webpack-dev-server --inline --progress --config build/webpack.dev.conf.js --open", 在cmd中 npm run dev
2. eslint会检查js代码规范
>   "lintfix":"eslint --ext .js,.vue src --fix",
> npm run lintfix

#### 03-项目-准备-element-ui-文档分析
> element-ui 是饿了么团队开发的 适用vue的PC端项目的开发

#### 04-项目-准备-element-ui-安装-引入
1. npm i element-ui -S
2. 在main.js中
  - import ElementUI from 'element-ui'
  - import 'element-ui/lib/theme-chalk/index.css'
  - Vue.use(ElementUI)

#### 05-项目-准备-项目模板简化-调整
> 将模板中无用文件/文件夹 删除

#### 06-项目-准备-git版本控制
> github (git/svn)
git init
git status
git add .
git commit -m '注释'
新建远程仓库
关联仓库
git push

#### 07-项目-登录-新建分支-login组件-配置路由
1. git branch
2. git checkout -b dev-login
3.
#### 08-项目-登录-引入表单组件

#### 09-项目-登录-样式调整

#### 10-项目-登录-axios插件

#### 11-项目-登录-发送登录请求

#### 12-项目-登录-引入提示框组件

#### 13-项目-登录-登录成功-进入home组件

#### 14-项目-登录-简化登录请求代码-async和await

#### 15-项目-登录-保存token值

#### 16-项目-首页-布局容器-使用

#### 17-项目-首页-布局容器-样式调整

#### 18-项目-首页-头部-样式调整

#### 19-项目-首页-侧边栏-导航组件-文档

#### 20-项目-首页-侧边栏-引入导航组件-调整

#### 21-项目-首页-进入首页的权限验证

#### 22-项目-首页-头部-退出功能

#### 23-项目-首页-合并分支-新建用户分支

#### 24-项目-用户管理-用户列表-新建组件-路由配置

#### 25-项目-用户管理-用户列表-面包屑和搜索框

#### 26-项目-用户管理-用户列表-引入表格组件

#### 27-项目-用户管理-用户列表-表头处理

#### 28-项目-用户管理-用户列表-请求数据-设置请求头

#### 29-项目-用户管理-用户列表-渲染数据-一般数据

#### 30-项目-用户管理-用户列表-渲染数据-日期格式处理

#### 31-项目-用户管理-用户列表-渲染数据-用户状态开关

#### 32-项目-用户管理-用户列表-渲染数据-操作



