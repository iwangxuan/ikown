<template>
    <div id="card">
        <el-card v-for="focus in myFocus" :key='focus.id'>
            {{focus.name}}
        </el-card>
    </div>
</template>

<script>
export default {
    name:'userfous',
    props:['myFocus']
}
</script>

<style scoped>
@import url("//unpkg.com/element-ui@2.15.6/lib/theme-chalk/index.css");
   
    #right2 .el-card{
        text-align: start;
        margin-top: 20px;
        position: absolute;
        width: 970px;
    }
</style>