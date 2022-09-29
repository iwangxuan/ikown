<template>
  <div class="main">
      <mymenu 
      activeIndex=2 
      activeIndex2=2
      :searchPage='searchPage'
      ></mymenu>
      <el-card id="left" >
        <nav 
        v-for="classifer in classifiers" 
        v-bind:key="classifer.id" 
        border-radius 
        >
        <el-link @click="setTag(classifer.tag)" :underline="false"> {{ classifer.tag }} </el-link> 
        </nav>
      </el-card>
      <div class="block">
        <div class="rightadd">
          <el-carousel height="200px" box-shadow>
      <el-carousel-item >
        <img src="../assets/ad1.jpg" alt="">
      </el-carousel-item>
      <el-carousel-item >
        <img src="../assets/ad2.jpg" alt="">
      </el-carousel-item>
      <el-carousel-item >
        <img src="../assets/ad3.jpg" alt="">
       </el-carousel-item>
      </el-carousel>
        </div>
      <div class="leftadd">
        <img src="../assets/ad4.jpg" alt="">
      </div>
  </div>
  
  <div id="right">
    <el-card id="article"   v-for="page in pages" v-bind:key="page.id" >
      <span id="tag" >{{ page.tag }}</span>
      <span id="topic"></span><h2 @click="toPage(page.id)">{{ page.topic }} </h2>
      <span id="author">作者：{{ page.name }}</span>
      <span id="content"><p> {{ page.content }}</p></span> 
      <!-- 因为返回的时间是字符串，为了显示前面的年月，可以暂时使用字符串函数截取 -->
      <span id="time">发布时间：{{ page.create_time.slice(0,10)}}</span>
    </el-card>
    <!-- <span id="egpage">
      <a href="http://localhost:8080/eg-page" >文章详情示例</a>
    </span> -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="12"
      layout="prev, pager, next, jumper"
      :total="120">
    </el-pagination>
  </div>
  
  </div>
</template>

<script>
import mymenu from './mymenu.vue'
export default {
  components: { mymenu },
  name : 'read',
    data() {
      return {
        classifiers:[
          {id:'000',tag:'全部'},
          {id:'001',tag:'Web'},
          {id:'002',tag:'Java'},
          {id:'003',tag:'C/C++'},
          {id:'004',tag:'人工智能'},
          {id:'005',tag:'前端'},
          {id:'006',tag:'架构'},
          {id:'007',tag:'区块链'},
          {id:'008',tag:'数据库'},
          {id:'009',tag:'5G'},
          {id:'010',tag:'游戏开发'},
          {id:'011',tag:'移动开发'},
          {id:'012',tag:'运维'},
          {id:'013',tag:'安全'},
          {id:'014',tag:'云计算/大数据'},
          {id:'015',tag:'研发管理'},
          {id:'016',tag:'物联网'},
          {id:'017',tag:'计算机基础'}
        ],
        currentPage3: 1,
         pages:{},
         num: 1,
         currentPage:1,
         time:''
      };
    },
    mounted() {
      this.num;
      this.getPages(this.num);
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.num = val;
        this.getPages(this.num);
        console.log(this.num);
      },
      setTag(tag){
          console.log(tag);
          if(tag === '全部'){
            tag = '';
          }
          let token = this.$store.state.token;
          this.$axios({
            method:'get',
            url:'/article/search',
            headers:{
              'token' : token,
            },
            params:{
              page:this.num,
              tag:tag,
              search: ''
            }
          }).then((res) => {
            if(res.status == 200){
              this.pages = res.data.data;
            }
          }).catch((err) => console.log(err))
      },
      getPages(num){
        this.$axios({
           method:'get',
           url:'/article/getlist',
           params:{
             page : num,
           }
        }).then((res) => {
          if(res.status == 200){
            
            // console.log(num)
            this.pages = res.data.data;
            // console.log(res.data)
            // console.log(this.pages)
          }
        }).catch((err) => {
          console.log(err);
        })
      },
      searchPage(search){
        let token = this.$store.state.token;
          this.$axios({
            method:'get',
            url:'/article/search',
            headers:{
              'token' : token,
            },
            params:{
              page:this.num,
              tag:'',
              search: search
            }
          }).then((res) => {
            if(res.status == 200){
              this.pages = res.data.data;
            }
          }).catch((err) => console.log(err))
      },
      toPage(id){
       console.log(id);
       this.$router.push({ path: "/Page", query: { essayid: id } }); 
      },
    },
}
</script>


<style scoped>
@import url("//unpkg.com/element-ui@2.15.6/lib/theme-chalk/index.css");
#app{
    margin: 0;
    padding: 0;
}
.el-card{
  margin-top: 20px;
}
.el-pagination{
  margin-left: 400px;
  margin-top: 20px;
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
#left{
  width: 120px;
  margin-left: 60px;
  position: absolute;
}
#right{
  margin-top: 20px;
  margin-left: 30px;
  width: 750px;
}
#article{
  width: 900px;
  margin-left: 180px;
  margin-top: 10px;
}
nav{
    padding: 15px;
    margin-left: -20px;
    width: 100px;
    height: 30px;
    font-size: 40px;
    font-weight: 600;
}
nav :hover{
  border-radius: 30px;
  padding: 5px;
  background-color: rgb(220, 214, 241);
}
.block{
  margin-left: 20px;
  display: flex;
  justify-content: left;
}
  .rightadd{
    display: inline-flexbox;
    width: 500px;
    height: 200px;
    margin-left: 180px;
    margin-top: 20px;
  }
  .leftadd{
    display: inline-flexbox;
    margin-top: 20px;
    width: 300px;
    height: 200px;
    margin-left: 20px;
    }
  .block img{
    display: inline;
    height: 100%;
  }
  #author{
    display: inline-flex;
    width: 180px;
    margin-left: 0px;
    height: 30px;
    font-size: 18px;
    color: darkslateblue;
  }
  #tag{  
    display: flex;
    position: absolute;
    padding: 6px;
    margin-top: -10px;
    background-color: rgb(32, 73, 184);
    color: floralwhite;
    border-radius: 8px;
  }
  #content{
    display: inline-flex;
    margin-top: -12px;
    color: rgb(122, 122, 128);
    height:40px;
    width:480px;
    overflow: hidden;
  }
  #topic{
    display: flex;
    margin-top: -35px;
  }
  #time{
    display: inline-flex;
    color: lightslategrey;
  }
  #egpage a{
    text-decoration: none;
    color: blue;
  }
  #egpage{
    margin-top: 20px;
    display: block;
    margin-left: 500px;
  }
</style>
