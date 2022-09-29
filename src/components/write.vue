<template>
    <div>
      <mymenu></mymenu>
      <div id="writetop">
        <span id="writetag"><h3>请开始你的创作</h3></span>
        <span>文章类型</span>
        <el-select label="请选择文章类型" v-model="tag">
          <el-option label="大数据" value="大数据"></el-option>
          <el-option label="Web" value="Web"></el-option>
          <el-option label="Java" value="Java"></el-option>
          <el-option label="C/C++" value="C/C++"></el-option>
          <el-option label="人工智能" value="人工智能"></el-option>
          <el-option label="架构" value="架构"></el-option>
          <el-option label="前端" value="前端"></el-option>
          <el-option label="区块链" value="大数据"></el-option>
          <el-option label="数据库" value="数据库"></el-option>
          <el-option label="5G" value="5G"></el-option>
          <el-option label="游戏开发" value="游戏开发"></el-option>
          <el-option label="移动开发" value="移动开发"></el-option>
          <el-option label="运维" value="运维"></el-option>
          <el-option label="云计算/大数据" value="云计算/大数据"></el-option>
          <el-option label="安全" value="安全"></el-option>
          <el-option label="研发管理" value="研发管理"></el-option>
          <el-option label="物联网" value="物联网"></el-option>
          <el-option label="计算机基础" value="计算机基础"></el-option>
        </el-select>
        <span id="topic">
            <el-input
              type="text"
              v-model="topic"
              maxlength="20"
              placeholder="请输入文章标题（不超过20个字）"
              show-word-limit
            ></el-input>
        </span>
        
        <span id="writebtn">
          <el-button>保存草稿</el-button>
          <el-button type="primary" @click="setPage()">发表文章</el-button>
        </span>
      </div>
      <div id="write1">
            <el-input
        type="textarea"
        :autosize="{ minRows: 20, maxRows: 20}"
        placeholder="请输入内容"
        v-model="content">
      </el-input>    
      </div>
      <div id="write2">
        <el-input
        type="textarea"
        :autosize="{ minRows: 20, maxRows: 20}"
        placeholder=""
        v-model="content">
      </el-input>
      </div>
    </div>
</template>

<script>
import mymenu from "./mymenu.vue"
export default {
    components:{ mymenu },
    data(){
        return{
            topic:'',
            content:'',
            tag:'',
    }
    },
    methods: {
      setPage(){
        let token = this.$store.state.token;
        if(!this.topic)
          return this.$message.warning('标题不能为空！');
        if(!this.content)
          return this.$message.warning('内容不能为空！');
        if(!this.tag)
          return this.$message.warning('还没有选择类型！');
        this.$axios({
          method:'post',
          url:'/article/add',
          headers:{
            'token' : token,
          },
          data:{
            topic : this.topic,
            content : this.content,
            tag : this.tag,
          }
        }).then((res) => {
          if(res.status == 200){
            this.topic = '';
            this.content = '';
            this.tag = '';
            this.$message.success(res.data.msg); 
          }
        }).catch((err) => {
          console.log(err);
        })
      }
    },
}
</script>

<style scoped>
@import url("//unpkg.com/element-ui@2.15.6/lib/theme-chalk/index.css");
    #app{
        margin: 0;
        padding: 0;
    }
    #logo{
        font-family: "隶书";
        font-size: 30px;
        color: rgb(71, 57, 253);
    }
    .el-menu a{
        background-color: #fafbfb;
        text-decoration:none;
    }
    #writetop{
      margin-top: 20px;
    }
    #writetag{
      display: block;
      font-size: 25px;
      margin-top: 15px;
      width: 500px;
      margin-left: 400px;
    }
    #topic{
      display: inline-block;
      margin-left: 200px;
      width: 300px;
    }
    #writebtn{
      display: inline-block;
      margin-left: 120px;
    }
    #write1,#write2{
      width: 600px;
    }
    #write1 .el-textarea,#write2 .el-textarea{
      display: block;
      margin-top: 20px;
      width: 600px;
    }
    #write1{
      position: absolute;
      
    }
    #write2{
      display: flex;
      margin-left: 630px;
      height: 537px;
      position: relative;
    }
</style>