<template>
    <div id="inforight">
          <el-card id="infotop">
              <div id="infopic">
                <img  src="../assets/pic.jpg" alt="">  
                <span id="infodearname">{{info.name}}</span>
              </div>
          </el-card>
          <el-card id="basic">
            <span id="basictag"><h3>基本信息</h3></span>
            <el-divider></el-divider>
                <span id="m1"><span id="r1">用户账号</span><span id="l1">{{info.name}}</span></span>  
                <span id="m1"><span id="r1">性别</span><span id="l1">{{info.gender}}</span></span>  
                <span id="m1"><span id="r1">个人简介</span><span id="l1">{{info.intro}}</span></span>  
                <span id="m1"><span id="r1">所在地区</span><span id="l1">{{info.address}}</span></span>  
                <span id="m1"><span id="r1">年龄</span><span id="l1">{{info.age}}</span></span>  
          </el-card>
          <el-card id="basic">
            <span id="basictag"><h3>教育信息</h3></span>
                <el-divider></el-divider>
                <span id="m1"><span id="r1">学校名称</span><span id="l1">{{user.school}}</span></span>  
                <span id="m1"><span id="r1">专业</span><span id="l1">{{user.major}}</span></span>  
                <span id="m1"><span id="r1">入学时间</span><span id="l1">{{user.schooltime}}</span></span>  
                <span id="m1"><span id="r1">学历</span><span id="l1">{{user.grade}}</span></span> 
          </el-card>
      </div>
</template>

<script>
import mymenu from './mymenu.vue'

export default {
  components: { mymenu },
  props:['info'],
    data(){
        return{
            activeIndex: '6',
            activeIndex2: '6',
            input4:'',
            user:{
            sex:'女',
            school:'西安邮电大学',
            major:'软件工程',
            schooltime:'2019年9月',
            grade:'本科'
            },
            activeIndex: '6',
            activeIndex2: '6',
            input4:'',
        }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style scoped>
@import url("//unpkg.com/element-ui@2.15.6/lib/theme-chalk/index.css");
    #infotop{
        margin-top: 10px;
    }
    #infopic{
        height: 120px;
    }
    #infopic img{
        padding: 0;
        margin-left: -900px;
        width: 80px;
        height: 80px;
        border-radius: 100%;
    }
    #infodearname{
        display: flex;
        margin-left: 15px;
        font-size: 23px;
        font-weight: 600;
    }
    #basic{
        margin-top: 10px;
    }
    #basictag{
        display: flex;
        margin-left: 30px;
        margin-top: -20px;
        margin-bottom: -20px;
    }
    #basic{
        margin-top: 10px;
    }
    #basictag{
        display: flex;
        margin-left: 30px;
        margin-top: -20px;
        margin-bottom: -20px;
    }
    #m1{
        display: flex;
        padding: 10px;
    }
    #r1{
        display: block;
        text-align: initial;
        width: 100px;
        color: darkgrey;
        margin-left: 20px;
    }
    #l1{
        display: flex;
        margin-left: 0px;
    }
</style>