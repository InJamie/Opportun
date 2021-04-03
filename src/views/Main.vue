<template>

  <el-container>
    <!--    顶侧-->
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-button type="danger" plain>登录</el-button>
      <el-dropdown>
        <span>{{name}}</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-container>
      <!--     左侧-->
      <el-aside width="200px"  style="height:2400px;position: relative">
        <!--展开按钮-->
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;position: absolute;top: 0;left: 0">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <!--菜单栏-->
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse"
                 style="position: absolute;top: 45px;">
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">
              头条新闻</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-document"></i>
            <span slot="title">精读</span>
          </el-menu-item>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">更多分类</span>
            </template>
            <el-menu-item-group>
              <span slot="title">分组一</span>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <span slot="title">选项4</span>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">本地</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <!--      主要内容-->
      <el-main>
        <!--        路由展示-->
        <router-view>
        </router-view>

      </el-main>
    </el-container>
  </el-container>

</template>

<script>
import axios from "axios";

export default {
  created() {
    console.log("如何实现加载当前Vue时给他的嵌套路由赋予默认值");
    axios.get("http://localhost:8081/user/list", {
      params: {},
      jsonp: 'handleCallback'
    }).then(
      function (response) {
        console.log(response)
      }
    )
  },
  name: 'Main',
  data() {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    };
    return {
      tableData: Array(20).fill(item),
      isCollapse: true,
      name:'Jamie'
    };
  },
  methods:{
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>


<style scoped>
.el-radio-button__orig-radio:checked+.el-radio-button__inner{
  box-shadow: -1px 0 0 0 rgb(251,71,71);
}
.el-radio-button__orig-radio:checked+.el-radio-button__inner {
  color: #FFF;
  background-color: rgb(251,71,71);
  border-color: rgb(251,71,71);
}
.el-menu-item.is-active,.el-radio-button__inner:hover{
  color: rgb(251,71,71);
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-header, .el-footer {
  background-color: rgb(252,252,252);
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: rgb(252,252,252);
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
} .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>

