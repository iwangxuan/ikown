<template>
  <div class="main">
    <mymenu activeIndex='1' activeIndex2='1'></mymenu>
    <div id="top">
        <span id="maintag">知识小星球</span>
        <span id="main1">
          总有你想知道的<br><br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;总有你感兴趣的<br><br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;总有你想探讨的
        </span>
    </div>
    <div id="mid">
       <el-card id="mid1">
         加入知识小星球，建设属于你的知识体系~
       </el-card>
       <el-row id="midd" :gutter="10">
        <el-col :span="8">
          <el-card >
            <div id="midimg"><img src="../assets/why.png" alt=""></div>
            <span id="midtag">为什么选择我们？</span>
            <ul>
              <li>有态度的知识社区</li>
              <li>有深度的技术分享</li>
              <li>有温度的博客平台</li>
            </ul>
          </el-card>
        </el-col>
         <el-col :span="8">
            <el-card >
              <div id="midimg"><img src="../assets/what.png" alt=""></div>
              <span id="midtag">你能获得什么？</span>
              <ul>
                <li>专属于你的私人博客</li>
                <li>志同道合的学习伙伴</li>
                <li>干货满满的技术文章</li>
              </ul>
            </el-card>
         </el-col>
         <el-col :span="8">
           <el-card >
              <div id="midimg"><img src="../assets/who.png" alt=""></div>
              <span id="midtag">你能成为什么？</span>
              <ul>
                <li>令人尊敬的技术大牛</li>
                <li>备受关注的领域黑马</li>
                <li>自得其乐的博客作者</li>
              </ul>
            </el-card>
         </el-col>
       </el-row>
    </div>
    <div id="under">
      <el-card id="mid1">
         开始你的知识小星球之旅吧~ 
       </el-card>
       <div id="undermsg">
         <el-card>
         <div>已有账号，想写博客？</div><el-button type="primary"> <router-link to='/login'>去登录</router-link> </el-button>
       </el-card>
       <el-card>
         <div>没有账号，想加入我们?</div><el-button><router-link to='/register'>去注册</router-link></el-button>
       </el-card>
       </div>
       
    </div>
  </div>
</template>

<script>
import mymenu from './mymenu.vue'
export default {
  components: { mymenu }
}
</script>


<style scoped>
@import url("//unpkg.com/element-ui@2.15.6/lib/theme-chalk/index.css");
#app{
    margin: 0;
    padding: 0;
}
#top{
  background-image: url("../assets/bigbg.gif");
  background-size: contain;
  width: 100%;
  height: 470px;
}
#maintag{
  margin-left: 200px;
  padding-top: 60px;
  display: block;
  font-size: 40px;
  font-family: "楷体";
  font-style: italic;
  font-weight: 600;
  color: rgb(76, 120, 170);
}
#main1{
    display: block;
    font-family: "隶书";
    font-size: 23px;
    padding-top: 80px;
    color: rgb(231, 171, 41);
    margin-left: 500px;
  }
  #mid1{
    margin-top: 20px;
    font-style: italic;
    font-size: 20px;
    font-weight: 900px;
  }
  #midd{
    margin-top: 20px;
  }
  #midtag{
    font-size: 20px;
    font-weight: 600;
  }
  #midd ul{
    list-style: none;
  }
  #midd ul li{
    color: rgb(126, 126, 126);
    padding: 10px;
    margin-left: -50px;
  }
  #midimg {
    width: 400px;
    height: 230px;
  }
  #undermsg{
    display: flex;
    justify-content: space-evenly;
    margin-top: 20px;
  }
  #undermsg{
    font-family: sans-serif;
    font-size: 30px;
  }
  a{
    text-decoration: none;
    color: #000;
  }
</style>
