<template>
    <div>
        <mymenu activeIndex='4' activeIndex2='4'></mymenu>
      <div id="userhometop">
          <div id="backdrop">
              <span id="title">{{user.name}} 的博客</span>
          </div>
          <div id="portrait">
              <img id="userpic" src="../assets/pic.jpg" alt="">
          </div>
          <span id="dearname" >{{user.name}}</span><br><br>
          <span id="sign">个性签名：{{user.intro}}</span>
          <div id="msg">
            <span>{{user.fans * 3 + 198}}</span>
            <el-divider direction="vertical"></el-divider>
            <span>{{myFocus.length}}</span>
            <el-divider direction="vertical"></el-divider>
            <span>{{myFans.length}}</span> 
          </div>
          <div id="msg1">
              <span>被访问量</span>
              <span ><router-link id="link" to="/userhome/userfous" >关注</router-link> </span>
              <span > <router-link id="link" to="/userhome/userfans">粉丝</router-link> </span>
          </div>
      </div>
      <div id="userhomemain">
      <div id="left1">
          <el-card id="achieve">
            <span id="achieve1"><i class="el-icon-s-flag"></i>获得成就</span><hr>
            <i class="el-icon-pie-chart"></i><span>累计阅读489分钟</span><br><br>
            <i class="el-icon-check"></i><span>累计点赞50篇博文</span><br><br>
            <i class="el-icon-medal"></i><span>累计被访问100次</span>
          </el-card>
          <el-card id="add">
              <span>今日资讯</span><hr>
              <ul>
                  <li v-for="add in adds" v-bind:key="add.id">{{add.tag}}</li>
              </ul>
          </el-card>
      </div>
      <div id="right1">
          <div id="right2">
              <el-card>
                    <span><router-link id="link" to="/userhome/recent">最近阅读</router-link></span>
                    <el-divider direction="vertical"></el-divider>
                    <span @click="getMyPage"><router-link id="link" to="/userhome/mypage" >文章</router-link></span>
                    <el-divider direction="vertical"></el-divider>
                    <span><router-link id="link" to="/userhome/likes">点赞</router-link></span>
                    <el-divider direction="vertical"></el-divider>
                    <span @click='getCollect'><router-link  id="link" to="/userhome/collect">收藏</router-link></span>
                </el-card> 
          </div>
          <div id="right3">
              <router-view 
              :myPage = 'myPage'
              :delmyPage='delmyPage'
              :myFocus='myFocus'
              :myFans='myFans'
              :myHistory='myHistory'
              :myCollect='myCollect'
              ></router-view>
          </div>
          </div>
     </div>
    </div>
</template>

<script>
import mymenu from './mymenu.vue'
import userfous from './userfous.vue'
import userfans from './userfans.vue'
import likes from './likes.vue'
import recent from './recent.vue'
import mypage from './mypage.vue'
import collect from './collect.vue'
export default {
  name:'userhome',
  components: { mymenu,userfous,userfans,recent,likes,mypage,collect },
    data(){
        return{
            user:{},
            activeIndex: '5',
            activeIndex2: '5',
            input4:'',
            myFocus:[],
            myFans:[],
            adds:[
                {id:'c01',tag:'学好vue,dom不发愁'},
                {id:'c02',tag:'剑指offer，圆梦硅谷'},
                {id:'c03',tag:'速看数据结构与算法'},
                {id:'c04',tag:'什么？你还不会js?'}
            ],
            myPage:[],
            myHistory:[],
            myCollect:[],
        }                               
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
    //获取当前登录的用户信息
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
                this.user = res.data.data;
            }
            })
            .catch((err) => {
               console.log(err);
            });
            },
      //获取当前用户关注的信息
      getfocus(){
          let token = this.$store.state.token;
            this.$axios({
                method: "get",
                url: "/focus/getFocus",
                headers:{
                    'token':token
                },
            }).then((res) => {
            if(res.status == 200){
                // console.log(res.data);
                this.myFocus = res.data.data;
            }
            })
            .catch((err) => {
               console.log(err);
            });
      },
      //获取粉丝
      getFans(){
        let token = this.$store.state.token;
            this.$axios({
                method: "get",
                url: "/focus/getFans",
                headers:{
                    'token':token
                }
            })
            .then((res) => {
            if(res.status == 200){
                // console.log(res.data.data);
                this.myFans = res.data.data;
            }
            })
            .catch((err) => {
               console.log(err);
            });
      },
      getMyPage(){
          let token = this.$store.state.token;
          this.$axios({
              method:'get',
              url:'/user/getArticle',
              params:{
                  page:1,
              },headers:{
                    'token' : token,
                },
          }).then((res) => {
                  if(res.status == 200){
                      this.myPage = res.data.data;
                  }
              }).catch((err) => err)},
       //删除发表的文章
       delmyPage(i){
        let token = this.$store.state.token;
        this.$axios({
            method:'post',
            url:'/article/delete',
            headers:{
                'token' : token
            },
            data:{
                'id': i
            },
            
            }).then((res) => {
                if(res.status == 200){
                    this.getMyPage();
                }
                console.log
        }).catch((err) => console.log(err));
        
      },
    // 查询历史浏览
        getHistory(){
        let token = this.$store.state.token;
          this.$axios({
              method:'get',
              url:'/user/gethistory',
              params:{
                  page:1,
              },headers:{
                    'token' : token,
                },
          }).then((res) => {
                  if(res.status == 200){
                      this.myHistory = res.data.data;
                      console.log(111)
                      console.log(this.myHistory);
                  }
          }).catch((err) => err)
        },
        getCollect(){
            let token = this.$store.state.token;
            console.log('已经在查收藏了啦')
            this.$axios({
                method:'get',
                url:'/collection/get',
                headers:{
                    'token' : token,
                }
            }).then((res) =>{
                if(res.status == 200){
                    this.myCollect = res.data.data;
                     console.log(res.data)
                }
            })
        }
    },
    mounted() {
       this.getUserinfo();
       this.getMyPage();
       this.getfocus();
       this.getFans();
       this.getCollect();
       this.getHistory();
    },
}
</script>

<style scoped>
@import url("//unpkg.com/element-ui@2.15.6/lib/theme-chalk/index.css");
    #app{
        margin: 0;
        padding: 0;
    }
    #right{
        margin-top: 20px;
        width: 750px;
    }
    #article{
        width: 900px;
        margin-left: 180px;
        margin-top: 10px;
    }
    #link{
        text-decoration: none;
        color: slategray;
    }
    #link:hover{
        color: rgb(15, 14, 17);
    }
    #link:focus{
        color: rgb(15, 14, 17);
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
    #backdrop{
        height: 100px;
        width: 100%;
        background-image: url('../assets/userhome1.jpg');
        background-repeat: no-repeat;
        background-position: 50%;
        background-size: cover;
    }
    #title{
        color: white;
        font-size: 23px;
        display:flex;
        padding-top: 10px;
        padding-left: 10px;
    }
    #dearname{
        font-size:23px;
    }
    #portrait{
        width: 120px;
        height: 120px;
        border-radius: 100%;
        background-color: #fff;
        margin-top: -50px;
        margin-left: 580px;
        position: relative;
    }
    #userpic{
        width: 100px;
        height: 100px;
        padding: 8px;
        overflow: hidden;
        border-block:3px 3px 3px 3px;
        border: aliceblue;
        border-radius: 100%;
    }
    #sign{
        color: darkgray;
    }
    #msg{
        margin-top: 20px;
        font-size: 23px;
        font-weight: inherit;
    }
    #msg1{
        font-size: 10px;
        color: slategray;
    }
    #msg1 span{
        padding: 12px;
    }
    #userhomemain{
        background-color: #f4f5f5;
    }
    #left1{
        margin-top: 20px;
        margin-left: 0px;
        width: 250px;
        height: 1000px;
        position: absolute;
    }
    #acheive1{
        color: mediumblue;
        padding-top: 2px;
        display: inline-block;
    }
    #left1 #right1{
        background-color: rgb(134, 128, 128);
    }
    #achieve span,#add span{
        display: inline;
        padding: 6px;
    }
    #add{
        margin-top: 20px;
        padding: 6px;
    }
    #add ul li{
        padding: 6px;
    }
    #right1{
        width: 900px;
        margin-left: 260px;
        margin-top: 15px;
        position: relative;
        height: 1000px;
    }
    #right2 .el-card{
        text-align: start;
        margin-top: 20px;
        position: absolute;
        width: 970px;
    }
    #right3{
        margin-top: 90px;
        width: 970px;
        position: absolute;
    }
    #right3 .el-card{
        margin-top:  10px;
    }
    #usertag{
        display: inline-flex;
        margin-left: 0px;
        margin-top: -30px;
    }
    #usercontent{
        color: darkgrey;
        display: flex;
    }
    #usertime{
        display: flex;
        color: rgb(173, 173, 173);
        margin-top: -20px;
        margin-left: 760px;
    }
</style>