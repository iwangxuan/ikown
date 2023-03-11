<!--
 * @Author: Wang Xuan
 * @Date: 2021-09-07 14:13:29
 * @LastEditTime: 2022-11-17 15:04:47
-->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #f4f4fc;
}
* {
  margin: 0;
  padding: 0;
}
</style>
