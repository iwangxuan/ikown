<template>
    <div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item id="logo"><img src="..\assets\logo.png" width="60px">知识小星球</el-menu-item>
          <el-menu-item index="1" ><a href="http://localhost:8080/"> 首页</a></el-menu-item>
          <el-menu-item index="2" ><a href="http://localhost:8080/read" >看文章</a></el-menu-item>
          <el-menu-item index="3" ><a href="http://localhost:8080/userinfo/userinfo1">我的</a></el-menu-item>
          <el-menu-item >
            <el-input placeholder="请输入内容" v-model="input"><i slot="prefix" class="el-input__icon el-icon-search"></i></el-input>
          </el-menu-item>
          <el-menu-item ><el-button type="primary" @click="search(input)">搜索</el-button></el-menu-item>
          <el-menu-item index="4" ><a href="http://localhost:8080/userhome"><i class="el-icon-user-solid"></i></a></el-menu-item>
          <el-menu-item index="5"  v-if="noLogin"><a href="http://localhost:8080/login">登录</a></el-menu-item>
           <el-menu-item index="5" @click="exit()" v-else>退出</el-menu-item>
          <el-menu-item index="6" ><i class="el-icon-edit"></i><a href="http://localhost:8080/write">去创作</a></el-menu-item>
      </el-menu>
    </div>
</template>

<script>

export default {
    name:'mymenu',
    data(){
        return{
            input:'',
            noLogin : false,
        }
    },
    methods: {
      handleSelect(key, keyPath) {
        this.noLogin = this.$store.state.noLogin;
        console.log(this.$store.state.noLogin)
      },
      exit() {
          this.$confirm("您确定要退出吗？", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning",
          }).then(() => {
              // 清空路由栈
              this.$store.commit('setToken','');
              this.$router.push("/login");
              this.noLogin = true; 
              // this.$forceUpdate();
            })
            .catch((err) => err);
        },
        search(input){
          this.searchPage(input);
          this.input = '';
        }
    },
    props:['activeIndex','activeIndex2','searchPage'],
    mounted(){
        this.noLogin;
    }
}
</script>

<style scoped>
  @import url("//unpkg.com/element-ui@2.15.6/lib/theme-chalk/index.css");
#app{
    margin: 0;
    padding: 0;
}
.el-menu a{
    background-color: #fafbfb;
    text-decoration:none;
}
#logo{
  font-family: "隶书";
  font-size: 30px;
  color: rgb(71, 57, 253);
}
</style>