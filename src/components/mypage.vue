<template>
    <div>
      <el-card id="mypage" v-for="myPage in myPage" v-bind:key="myPage.id">
      <span id="tag"></span><h3>{{ myPage.topic}} </h3>
      <span id="content"><p> {{ myPage.content }}</p></span> 
      <span id="delmyPage"><el-button @click="delPage(myPage.id)">删除</el-button></span>
    </el-card>
    </div>
</template>

<script>
import userhome from './userhome.vue'

export default {
    name:'mypage',
    component:{userhome},
    data(){
        return{
          
        }
    },
    methods: {
      delPage(i){
        this.delmyPage(i);
      }
    },
    props:['myPage','delmyPage']
}
</script>

<style scoped>
#mypage{
    margin-top: 15px;
}
#mypage h3{
    display: block;
    padding-bottom: 10px;
    margin: 0px;
}
#content{
  display: block;
    width: 550px;
    height: 40px;
    margin-left: 100px;
    overflow: hidden;
    margin-top: -15px;
    color: rgb(122, 122, 128);
  }
  #tag{
    display: flex;
  }
  #delmyPage{
    display: flex;
    margin-top: -35px;
    margin-left: 750px;
    color: lightslategrey;
  }
</style>