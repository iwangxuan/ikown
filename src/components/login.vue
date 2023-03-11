<template>
    <div class="login">
        <h1 class="tag">欢迎登录知识小星球</h1>
        <el-card class="input1">
            <el-form >
                <el-form-item label="账号" >
                    <el-input ref="account" v-model="userName"></el-input>
                </el-form-item>
                <el-form-item label="密码" >
                    <el-input ref="password" type="password" v-model="password" show-password></el-input>
                </el-form-item>
                <span class="toHave">没有账号？<a href="http://localhost:8080/register">现在就去注册</a></span>
                <el-form-item class="btn">
                    <el-button @click="res()">重置</el-button>
                    <el-button @click="login()" type="primary"  >登录</el-button>
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
            userName:'',
            password:'',
        }
    },
    methods: {
       //重置
       res(){
            this.userName='';
            this.password='';
        },
        login() {
            if(!this.userName){
               return this.$message.warning("用户名不能为空!");
            };
            if(!this.password){
               return this.$message.warning("密码不能为空!");
            };
            this.$axios({
                method: "post",
                url: "/users/login",
                data: {
                    userName: this.userName,
                    password: this.password,
                },
            }).then(({ data,status }) => {
                if (status == 200) {   
                    // let accessToken = headers.token;
                    // let Flag = true;
                    // sessionStorage.setItem('accessToken',accessToken);
                    // sessionStorage.setItem('Flag', Flag);
                    console.log(data)
                    if(data){
                        this.$router.push("/read");
                        this.$message.success(data.message); 
                    }else {
                    return this.$message.error(data.message);
                }} else {
                    return this.$message.error(data.message);
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
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(to right,rgb(7, 10, 139),rgb(105, 81, 240));
}
.tag{
    font-family: "宋体";
    color: cornsilk;
    padding: 3vh;
}
.input1{
    flex: 1;
    max-height: 350px;
    max-width: 400px;
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
    flex: 1;
    max-width: 40%;
    position: absolute;
    align-self: flex-end;
    bottom: 20px;
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