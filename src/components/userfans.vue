<template>
    <div>
        <el-card v-for="fans in myFans" :key="fans.id">
            {{fans.name}}
        </el-card>
    </div>
</template>

<script>

export default {
    name:'userfans',
    props:['myFans']
}
</script>

<style scoped>
#right2 .el-card{
        text-align: start;
        margin-top: 20px;
        position: absolute;
        width: 970px;
    } 
</style>