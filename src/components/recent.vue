<template>
    <div class="main">
    <el-card id="recent" v-for="history in myHistory" v-bind:key="history.id">
      <span id="topic"></span><h3 @click="toPage(history.id)">{{ history.topic }} </h3>
      <span id="name">作者：{{ history.name }}</span><span id="content"><p> {{ history.content }}</p></span> 
      <span id="time">发布时间：{{ history.create_time.slice(0,10) }}</span>
    </el-card>
</div>
</template>

<script>
import userhome from './userhome.vue';
export default {
    name:'recent', 
    component:{ userhome },
    props:['myHistory'],
    data(){
        return{
          
        }
    },
    methods: {
      toPage(id){
       console.log(id);
       this.$router.push({ path: "/Page", query: { essayid: id } }); 
      },
    },
}
</script>

<style scoped>
@import url("//unpkg.com/element-ui@2.15.6/lib/theme-chalk/index.css");
#recent{
    margin-top: 15px;
}
#recent h3{
    display: inline-block;
    padding-bottom: 10px;
    margin: 0px;
}
#name{
    display: flex;
    width: 120px;
    position: absolute;
    font-size: 18px;
    color: darkslateblue;
  }
  #content{
    display: flex;
    color: rgb(122, 122, 128);
    height:40px;
    width:520px;
    margin-top: -15px;
    margin-left: 140px;
    overflow: hidden;
  }
  #topic{
    display: flex;
  }
  #time{
    display: flex;
    margin-top: -25px;
    margin-left: 750px;
    color: lightslategrey;
  }
</style>