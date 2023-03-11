<template>
    <div id="register">
      <div id="pic">
        <img src="../assets/logo.png" alt="">
      </div>
    <h1 class="reg">欢迎加入知识小星球</h1>
    <el-card class="register1">
      <el-form  status-icon  label-width="80px"   class="demo-ruleForm">
        <el-form-item label="用户名">
          <el-input v-model="userName"></el-input>
        </el-form-item>
        <el-form-item label="性别">
           <el-radio-group v-model="gender">
          <el-radio :label="1">男</el-radio>
          <el-radio :label="2">女</el-radio>
          <el-radio :label="3">保密</el-radio>
        </el-radio-group>
        </el-form-item>
        <el-form-item label="您的生日">
          <el-col >
            <el-date-picker  type="date" placeholder="选择日期" v-model="birthday"   style="width: 300px;"></el-date-picker>
          </el-col>
        </el-form-item>
          <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="password" autocomplete="off" show-password></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="checkPass">
    <el-input type="password" v-model="checkPassword" autocomplete="off" show-password></el-input>
    </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="register()" @keydown.enter="register()">注册</el-button>
          <el-button @click="res()">取消</el-button>
        </el-form-item>
    </el-form>
    </el-card>
    </div>
</template>

<script>
export default {
    data() {
      return {
        number: '',
        birthday: '',
        type: [],
        resource: '',
        gender:1,
        desc: '',
        checkPassword:'',
        userName: '',
        password:'',
        age:'18',
      }
    },
    methods: {
      register() {
          if(!this.userName){
            return this.$message.warning('用户名不能为空！');
          };
          if(!this.password){
            return this.$message.warning('密码不能为空！');
          };
          if(this.password.length<6){
            return this.$message.warning('密码最好不要短于6位哦~')
          }
          if(this.password!==this.checkPassword){
              return this.$message.error('两次输入的密码不一致！！！');
          };
          this.$axios({
            method: "post",
            url: "/users/register",
            data: {
              userName: this.userName,
              password: this.password,
              gender: this.gender,
              birthday: this.birthday
            },
          }).then(({data,status }) => {
            if (status == 200) {
              this.$message.success(data.message);
              this.$router.push("/login");
            } else {
              this.userName = ''
              this.password = ''
              this.checkPassword = ''
              this.birthday = ''
              this.gender = 0
              return this.$message.error(data.message);
            }
          }).catch((err) => {
            console.log(err)
        });
      },
   }
  }
</script>

<style scoped>
@import url("//unpkg.com/element-ui@2.15.6/lib/theme-chalk/index.css");
  #register{
    margin: 0px;
    padding: 0px;
    height: 630px;
    background: linear-gradient(to top,rgb(58, 60, 158),rgb(116, 95, 235));
  }
  .reg{
    font-family:"楷体";
    color: ghostwhite;
    padding-top: 30px;
    margin: 0px;
  }
  .register1{
    margin-top: 30px;
    margin-left: 360px;
    width: 550px;
    height: 450px;
  }
  .el-input{
    width: 300px;
  }
  .el-button{
    padding-left: 20px;
  }
  .el-date-picker{
    margin-left: 0px;
  }
  #pic{
    margin-left: -15px;
    margin-top: 285px;
    position: absolute;
  }
  #pic img{
    width: 500px;
  }
</style>