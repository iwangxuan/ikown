<template>
    <div class="login">
        <h1 class="tag">欢迎登录知识小星球</h1>
        <el-card class="input1">
            <el-form >
                <el-form-item label="账号" >
                    <el-input ref="account" v-model="user"></el-input>
                </el-form-item>
                <el-form-item label="密码" >
                    <el-input ref="password" type="password" v-model="pwd" show-password></el-input>
                </el-form-item>
                <span class="toHave">没有账号？<a href="http://localhost:8080/register">现在就去注册</a></span>
                <el-form-item class="btn">
                    <el-button @click="res()">重置</el-button>
                    <el-button type="primary" @click="login()" >登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        <img class="star" src="../assets/星球.png" alt="">
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name:'login',
    components:{axios},
    data(){
        return{
            user:'',
            pwd:'',
        }
    },
    methods: {
       //重置
       res(){
            this.user='';
            this.pwd='';
        },
        login(){
            if(!this.user){
               return this.$message.warning("用户名不能为空!");
            };
            if(!this.pwd){
               return this.$message.warning("密码不能为空!");
            };
            this.$axios({
                method: "post",
                url: "/user/login",
                data: {
                name: this.user,
                pwd: this.pwd,
                },
            })
            .then((res) => {
                // console.log(res.data);
                if (res.status == 200) {
                    //  console.log(res.headers.token);
                    let data = res.data;    
                    let accessToken = res.headers.token;
                    let Flag = true;
                    sessionStorage.setItem('accessToken',accessToken);
                    sessionStorage.setItem('Flag',Flag);
                    if(data.data){
                        this.$router.push("/read");
                        this.$message.success(data.msg); 
                    }else {
                    return this.$message.error(res.data.msg);
                }} else {
                    return this.$message.error(res.data.msg);
                }
                })
                .catch((err) => {
                    console.log(err);
                });
            },
        },
};
</script>

<style scoped>
@import url("//unpkg.com/element-ui@2.15.6/lib/theme-chalk/index.css");
    .login{
        margin: 0;
        padding: 0;
        width: 100vw;
        height:100vh;
        background: linear-gradient(to right,rgb(7, 10, 139),rgb(105, 81, 240));
    }
    .tag{
        margin: 0px;
        font-family: "宋体";
        color: cornsilk;
        padding-top: 30px;
    }
    .input1{
        width: 400px;
        height: 350px;
        margin-top: 40px;
        margin-left: 420px;
        position: absolute;
    }
    .in1,.in2{
        width: 250px;
    }
    .in2{
        padding-top: 30px;
    }
    .btn{
        margin-top: 20px;
        width: 350px;
        justify-content: space-between;
    }
    .star{
        width: 500px;
        margin-top: 300px;
        margin-left: 100px;
        position: absolute;
    }
    
    .toHave{
        padding-left: 140px;
        font-size: 6px;
        color: grey;
    }
    .toHave a{
        color: rgb(25, 173, 218);
    }
</style>