<template>
<el-container class="container">
    <el-header class="header">
        <el-row class="header-row">
            <el-col :span="4">
                <div class="grid-content bg-purple">
                    <img src="../../assets/logo.png" alt="该图片无法显示">
                </div>
            </el-col>
            <el-col :span="19" class="middle">
                <div class="grid-content bg-purple-light">
                    <h3>电商后台管理系统</h3>
                </div>
            </el-col>
            <el-col :span="1">
                <div class="grid-content bg-purple">
                    <a class="loginout" href="#"
                    @click.prevent="handleloginout()"
                    >退出</a>
                </div>
            </el-col>
        </el-row>
    </el-header>
    <el-container>
        <el-aside class="aside" width="200px">
          <!-- 开启路由模式 -->
            <el-menu
            :router="true"
            :unique-opened="true"
            class="el-menu-vertical-demo">

                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>用户管理</span>
                    </template>

                    <el-menu-item index="users">
                        <template slot="title">
                            <i class="el-icon-sort"></i>
                            <span>用户列表</span>
                        </template>
                    </el-menu-item>

                </el-submenu>

                <!-- 2 -->
                 <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>权限管理</span>
                    </template>

                    <el-menu-item index="1-1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>角色列表</span>
                        </template>
                    </el-menu-item>
                     <el-menu-item index="1-1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>权限列表</span>
                        </template>
                    </el-menu-item>

                </el-submenu>

                <!-- 3 -->
                 <el-submenu index="3">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>商品管理</span>
                    </template>

                    <el-menu-item index="1-1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>商品列表</span>
                        </template>
                    </el-menu-item>
                     <el-menu-item index="1-1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>分类参数</span>
                        </template>
                    </el-menu-item>
                     <el-menu-item index="1-1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>商品分类</span>
                        </template>
                    </el-menu-item>

                </el-submenu>

                <!-- 4 -->
                 <el-submenu index="4">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>订单管理</span>
                    </template>

                    <el-menu-item index="1-1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>订单列表</span>
                        </template>
                    </el-menu-item>

                </el-submenu>

                <!-- 5 -->
                 <el-submenu index="5">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>数据统计</span>
                    </template>

                    <el-menu-item index="1-1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>数据报表</span>
                        </template>
                    </el-menu-item>

                </el-submenu>

            </el-menu>

        </el-aside>
        <el-main class="main">
          <router-view></router-view>
        </el-main>
    </el-container>
</el-container>
</template>

<script>
export default {

  // 在组件渲染之前 if token
  // 钩子函数 在创建vm实例之前
  beforeCreate() {

    // 获取token
    const token = localStorage.getItem('token')
    // 如果不存在 回到login
    if (!token) {
      this.$router.push({name:'login'})
    }
  },
  methods:{
    handleloginout(){
      // 1. 提示
      this.$message.success('退出成功')
      // 2. 清除
      localStorage.clear()
      // 3. 回到login组件
      this.$router.push({name:'login'})
    }
  }
}
</script>

<style>
.container {
    height: 100%;
}

.header {
    background-color: #b3c0d1;
}

.aside {
    background-color: #d3dce6;
}

.main {
    background-color: #e9eef3;
    height: 100%;
}

/* 头部样式调整 */
.middle {
    text-align: center;
}

.loginout {
    line-height: 60px;
    text-decoration: none;
}
</style>
