<template>
    <div>
        <mymenu activeIndex=2 activeIndex2=2></mymenu>
        <el-card id="author">
            <span id="authorPic"><img src="../assets/Apic.jpg" alt=""></span>
            <span id="name"><h4>{{page.name}}</h4></span>
            <el-button v-if='page.focus' round @click="delFocus()">已关注</el-button>
            <el-button v-else round @click="setFocus()">+关注</el-button>
        </el-card>
        <el-card id="eg-page">
            <span><h2>{{page.topic}}</h2></span>
            <span><h4>作者：{{page.name}}</h4></span>
            <p>{{page.content}}</p>
        </el-card>
        <el-card id="active">
            <span><i class="el-icon-view"></i>浏览{{page.views}}</span>
            <span @click='setLikes()'><i class="el-icon-magic-stick"></i>点赞 {{page.likes}}</span>
            <span @click="addCollect()"><i class="el-icon-star-off"></i>收藏 {{page.collect}}</span>
            <span><i class="el-icon-thumb"></i>评论 {{page.comments}}</span>
        </el-card>
        <el-card id="comment">
            <el-input
                type="textarea"
                placeholder="请输入您的评论。友善的交流，是交朋友的第一步哦~"
                v-model="comment"
                maxlength="100"
                :autosize="{ minRows: 4, maxRows: 4}"
                show-word-limit
            >
            </el-input>
            <div id="active">
                 <el-button>取消</el-button><el-button type="primary" @click='setComments'>发表</el-button>
            </div>  
        </el-card>
        <el-card id="commentls">
                <div id="commentl" v-for="comment in commentList" :key='comment.id'>
                   <span id="Cname">{{comment.name}}</span>
                   <span id="Csay">评论说：</span>
                   <span id="Ccontent">{{comment.content}}</span>
                <el-divider></el-divider>
                </div>
        </el-card>
    </div>
</template>

<script>
import mymenu from './mymenu.vue'
export default {
    name:'Page',
    components:{mymenu},
    data(){
        return{
            comment:'',
            commentList:[],
            page:{},
        }
    },
    
    methods: {
        //获取文章详情
        showPage(){
            let id = this.$route.query.essayid;
            // console.log(id);
            let token = this.$store.state.token;
            this.$axios({
                method: "get",
                url: "/article/get",
                headers:{
                    'token' : token
                },
                params: {
                  articleId: id,
                },
            })
            .then((res) => {
            this.page = res.data.data;
            this.commentList = this.page.commentList;
            console.log(res.data);
            })
            .catch((err) => err);
            },
        
        //添加关注
        setFocus(){
            console.log(1);
            let token = this.$store.state.token;
            // console.log(this.page.userId)
                this.$axios({
                    method:'post',
                    url:'/focus/add',
                    headers:{
                        'token' : token,
                    },
                    data:{
                        followed : this.page.userId
                    }
                }).then((res) =>{
                    if(res.status == 200){
                        console.log(2);
                        this.page.focus = true;
                        this.$message.success(res.data.msg);
                    }else{
                        this.$message.warning(res.data.msg);
                    }
                })
        },
        // 取消关注
        delFocus(){
            console.log(3)
            let token = this.$store.state.token;
            this.$axios({
                    method:'post',
                    url:'/focus/delete',
                    headers:{
                        'token' : token,
                    },
                    data:{
                        followed : this.page.userId
                    }
                }).then((res) =>{
                    if(res.status == 200){
                        // console.log(res)
                        console.log(4);
                        this.page.focus = false;
                        this.$message.success(res.data.msg);
                    }else{
                        this.$message.warning(res.data.msg);
                    }
                })
        },
        //添加收藏
        addCollect(){
            let token = this.$store.state.token;
            let id = this.$route.query.essayid;
            // console.log('我收藏了') ;
            // console.log(id);
            this.$axios({
                method:'post',
                url:'/collection/add',
                headers:{
                    'token' : token
                },
                data:{
                    id
                }
            }).then((res) => {
                if(res.status == 200){
                    this.page.collect ++;
                    this.$message.success(res.data.msg);
                    // console.log(res.data)
                }
                else{
                    // console.log(res.data)
                }
            }).catch((err) =>{
                console.log(err)
            })
        },
        // 添加点赞
        setLikes(){
            let token = this.$store.state.token;
            let id = this.$route.query.essayid;
            console.log(id);
            this.$axios({
                method:'post',
                url:'/article/like',
                headers:{
                    'token' : token
                },
                data:{
                    id
                }
            }).then((res) => {
                if(res.status == 200){
                    this.page.collect ++;
                    this.$message.success(res.data.msg);
                }
                else{
                }
            }).catch((err) =>{
                console.log(err)
            })
        },
        //添加评论
        setComments(){
            let token = this.$store.state.token;
            this.$axios({
                method:'post',
                url:'/comment/add',
                headers:{
                    'token' : token,
                },
                data:{
                    articleId : this.page.id,
                    commentId : '-1',
                    content : this.comment,
                }
            }).then((res) => {
                if(res.status == 200){
                    this.comment = '';
                    this.showPage();
                    console.log(res);
                }
            }).catch((err) => {
                console.log(err)
            })
        }
    },
    mounted() {
        this.showPage();
        this.page.commentList;
        this.page.focus;
        this.page.likes;
        this.page.collect;
    },
}
</script>

<style scoped>
#author{
    width: 250px;
    height: 300px;
    margin-left: 20px;
    margin-top: 20px;
    position: absolute;
}
#author img{
    width: 120px;
    height: 100%;
    border-radius: 100%;
}
#name{
    font-size: 20px;
}
#eg-page,#active,#comment,#commentls{
    margin-top: 20px;
    margin-left: 300px;
    width: 900px;
}
#eg-page page{
    display: flex;
    margin-left: 20px;
}
#active{
    display: block;
    justify-content: space-around;
}
#active span{
    display: inline-block;
    width: 200px;
    text-align: center;
}
#commentl{
    justify-items: self-start;
}
#Cname{
    display: inline-block;
    width: 100px;
    margin-left: -600px;
    font-size: 18px;
}
#Csay{
    display: inline-block;
    font-size: 16px;
    color: slategray;
    margin-left: 10px;
    margin-right: 10px;
}
#Ccontent{
    display: inline-block;
}
</style>