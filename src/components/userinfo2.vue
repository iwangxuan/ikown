<template>
       <div id="inforight">
           <el-card>
               <div class="score">
                   <img class="scorebg" src="../assets/score.png" alt="">
                   <span class="bgnum">100</span>
                   <span class="scoretag">满分！您的账号也太安全了吧！</span>
               </div>
           </el-card>
            <el-card id="basic">
                <span id="setingtag"><h3>账号设置</h3></span>
                <span id="m2"><span id="r2">性别</span><span id="l2"> 
        <el-radio-group v-model="sex1">
          <el-radio :label="1">男</el-radio>
          <el-radio :label="2">女</el-radio>
          <el-radio :label="3">保密</el-radio>
        </el-radio-group></span></span>
                <span id="m2"><span id="r2" >号码</span><span id="l2"><el-input @blur="checkPhone" v-model="phone"></el-input></span></span>
                <span id="m2"><span id="r2" >年龄</span><span id="l2"><el-input v-model="age"></el-input></span></span>
                <span id="m2"><span id="r2">个人简介</span><span id="l2"><el-input v-model="intro" type="text" maxlength="15" ></el-input></span></span>
                <span id="m2"><span id="r2">地址</span><span id="l2"><el-input v-model="address" type="text"> </el-input></span></span>
                <el-button>取消</el-button><el-button @click="setInfo">确定</el-button>
            </el-card>
      </div>
</template>
<script>
export default {
    data(){
        return{
            age: '' ,
            phone:'',
            address:'',
            intro:'',
            sex1: '',
            sex:'',
        }
    },
        methods: {
            checkPhone(){
                // console.log(this.sex1);
                var parent = new RegExp("(13|14|15|18|17)[0-9]{9}") ;
                if(!parent.test(this.phone)){
                   return this.$message.error('请输入正确的手机号码！！！');
          };
            },
            setInfo(){
                if(this.sex1 == '1')
                    this.sex = '男';
                if(this.sex1 == '2')
                    this.sex = '女';
                if(this.sex1 == '3')
                    this.sex = '保密';
                // console.log(this.sex1);
                let token = this.$store.state.token;
                    //  console.log(1);
                if(!this.sex)
                    return this.$message.warning('还未选择性别哦！');
                if(!this.phone)
                    return this.$message.warning('电话号码未输入哦！');
                if(!this.age)
                    return this.$message.warning('年龄信息未输入哦！');
                if(!this.intro)
                    return this.$message.warning('个人简介未输入哦！');
                if(!this.address)
                    return this.$message.warning('地址信息还未输入哦！');
                this.$axios({
                method:'post',
                url:'/user/modify',
                headers:{
                'token':token
                },
                data:{
                    gender: this.sex,
                    age: this.age,
                    intro:this.intro,
                    address:this.address,
                    phone: '1',
                }
                }).then((res) => {
                  if(res.status == 200){
                    let data = res.data;
                    this.$message.success(data.msg);
                  }
                }).catch((err) => err);
            }
        },
}
</script>
<style scoped>
#inforight{
        width: 1020px;
        height: 800px;
        margin-left: 213px;
        position: absolute;
    }
    .el-card{
        margin-top: 10px;
    }
    .score{
        padding: 20px;
        padding-bottom: 20px;
        height: 150px;
        margin: -25px;
        
        background-image: linear-gradient(to top, rgba(255,0,0,0), rgba(228, 115, 9, 0.2));
    }
    .bgnum{
        display: block;
        margin-top: -90px;
        color: floralwhite;
        font-size: 40px;
    }
    .scoretag{
        display: block;
        color: gray;
        margin-top: 50px;
    }
    .scorebg{
        width: 100px;
    }
    #setingtag{
        display: flex;
        padding-bottom: 10px;
        margin-left: 10px;
    }
    #m2{
        display: flex;
        padding: 12px;
    }
    #r2{
        display: block;
        margin-top: 10px;
        text-align: initial;
        width: 100px;
        color: darkgrey;
    }
    #l2{
        display: block;
        width: 200px;
        margin-left: 0px;
    }
    #l3{
        display: block;
        margin-left: 400px;
    }
</style>