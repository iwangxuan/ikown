<template>
    <div class="userinfo">
        <mymenu activeIndex='3' activeIndex2='3'></mymenu>
      <div id="infomain">
        <div id="infoleft">
          <el-card id="inforight1">
              <span><router-link to="/userinfo/userinfo1">个人资料</router-link></span>
              <span><router-link to="/userinfo/userinfo2">修改资料</router-link></span>
              <span><router-link to="/userinfo/userinfo3">隐私设置</router-link></span>
          </el-card>
          <el-card id="inforight2">
              <span class="span2">“登录/注册”流程满意度</span>
              <span>非常满意</span>
              <span>基本满意</span>
              <span>感觉一般</span>
              <span>非常一般</span>
              <span>较不满意</span>
          </el-card>
          </div>
          <router-view 
            :info='info'
          ></router-view>
      </div>
    </div>
</template>

<script>
import mymenu from './mymenu.vue'
import userinfo1 from './userinfo1'
import userinfo2 from './userinfo2'
import userinfo3 from './userinfo3'
export default {
    name:'userinfo',
    components: { mymenu,userinfo1,userinfo2,userinfo3 },
    mounted() {
        this.getUserinfo();
    },
    data(){
        return{
            activeIndex: '6',
            activeIndex2: '6',
            input4: '',
            user:{
            birth:'2001-02-07',
            school:'西安邮电大学',
            major:'软件工程',
            grade:'本科',
            schooltime:'2019年9月',
            },
            info:{},
        }
    },
    methods: {
        getUserinfo(){
            let token = this.$store.state.token;
            this.$axios({
                method: "get",
                url: "/user/get",
                headers:{
                    'token':token
                }
            })
            .then((res) => {
            if(res.status == 200){
                // console.log(res.data.data);
                this.info = res.data.data
            }
            })
            .catch((err) => {
            console.log(err);
            });
            }
    },
}
</script>

<style scoped>
@import url("//unpkg.com/element-ui@2.15.6/lib/theme-chalk/index.css");

    #infoleft{
        width: 200px;
        height: 500px;
        position: absolute;
    }
    #infoleft .el-card{
        margin-top: 10px;
    }
    #infoleft a{
        text-decoration: none;
    }
    #infoleft span{
        text-align: center;
        display: block;
        padding: 12px;
        font-size: 16px;
        color: rgb(129, 129, 129);
        width: 180px;
        margin-left: -20px;
    }
    #infoleft span:hover{
            background: #f0f0f5;
    }
    .span1{
        background: #f0f0f5;
    }
    #infoleft .span2{
        display: block;
        color: black;

    }
    #inforight{
        width: 1020px;
        height: 800px;
        margin-left: 213px;
        position: absolute;
    }
    
 
</style>