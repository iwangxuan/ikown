<template>
    <div class="userinfo2">
      <div id="inforight">
           <el-card>
               <span id="mysterytag"><h4>隐私设置</h4></span>
               <span id="mysterytag"><h3>基础信息</h3></span>
               <el-switch
                    v-model="value1"
                    active-color="#13ce66"
                    inactive-color="#ff4949">
                </el-switch>
                <span id="l4">关闭后您的基础信息将对其他用户隐藏</span><el-divider></el-divider>
                <span id="mysterytag"><h3>收藏展示</h3></span>
                <el-switch
                    v-model="value2"
                    active-color="#13ce66"
                    inactive-color="#ff4949">
                </el-switch>
                <span id="l4">关闭后您的收藏将对其他用户隐藏</span><el-divider></el-divider>
                <span id="mysterytag"><h3>教育信息</h3></span>
                <el-switch
                    v-model="value3"
                    active-color="#13ce66"
                    inactive-color="#ff4949">
                </el-switch>
                <span id="l4">关闭后您的教育信息将对其他用户隐藏</span>
           </el-card>
      </div>
    </div>
</template>

<script>
import mymenu from './mymenu.vue'
export default {
  components: { mymenu },
        data(){
        return{
            value1:'true',
            value2:'true',
            value3:'true',
            activeIndex: '3',
            activeIndex2: '3',
            input4:'',
        }
    }
}
</script>

<style scoped>
@import url("//unpkg.com/element-ui@2.15.6/lib/theme-chalk/index.css");
    #app{
        margin: 0;
        padding: 0;
        width: 100%;
        background-color: #f5f6f7;
        position: relative;
    }
    #logo{
        font-family: "隶书";
        font-size: 30px;
        color: rgb(71, 57, 253);
    }
    a{
        background-color: #fafbfb;
        text-decoration: none;
    }
    #infoleft2{
        width: 200px;
        height: 500px;
        position: absolute;
    }
    #infoleft2 .el-card{
        margin-top: 12px;
    }
    #infoleft2 span{
        text-align: center;
        display: block;
        padding: 12px;
        font-size: 16px;
        color: rgb(129, 129, 129);
        width: 180px;
        margin-left: -20px;
    }
    #infoleft2 span:hover{
            background: #f0f0f5;
    }
    .span1{
        background: #f0f0f5;
    }
    #infoleft2 .span2{
        display: block;
        color: black;

    }
    #inforight{
        width: 1020px;
        height: 800px;
        margin-left: 213px;
        position: absolute;
    }
    .el-card{
        margin-top: 10px;
    }
    #mysterytag{
        display: flex;
        padding-bottom: 10px;
        margin-left: 10px;
    }
    #l4{
        display: block;
        text-align: start;
        color: grey;
        margin-left: 0px;
    }
    .el-switch{
        margin-left: 800px;
    }
</style>