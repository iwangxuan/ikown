<template>
    <div>
        <el-card id="collect" v-for="collect in collects" :key='collect.id'>
            <span id="topic"></span><h3 @click="toPage(collect.id)">{{ collect.topic }} </h3>
            <span id="name">作者：{{ collect.name }}</span><span id="content"><p> {{ collect.content }}</p></span> 
            <span id="num">收藏数：{{ collect.collect }}</span>
        </el-card>
    </div>
</template>

<script>
export default {
    name:'collect',
    props:['myCollect'],
    data(){
        return{
            collects:[]
        }
    },
    mounted() {
        this.delSame();
    },
    methods: {
        //因为后端未处理重复收藏问题，所以在前端进行一个去重处理
        delSame(){
            var obj = {};
            this.collects = this.myCollect.reduce(function(item, next) {
            obj[next.id] ? '' : obj[next.id] = true && item.push(next);
            return item;
            }, []);
            console.log(this.collects)
        },
        toPage(id){
       console.log(id);
       this.$router.push({ path: "/Page", query: { essayid: id } }); 
      },
    },
}
</script>

<style scoped>
#collect{
    margin-top: 15px;
}
#collect h3{
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
  #num{
    display: flex;
    margin-top: -25px;
    margin-left: 750px;
    color: lightslategrey;
  }
</style>