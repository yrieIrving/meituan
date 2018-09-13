<template>
 <div>
    <!-- <i-button type="success" bind:click="handleClick">这是一个按钮</i-button>
    <h1>{{msg}}</h1> -->
    <i-card full title="卡片标题" extra="额外内容" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg">
      <view slot="content">内容不错</view>
      <view slot="footer">尾部内容</view>
    </i-card>
 </div>
</template>

<script>
 export default {
   data () {
     return {
          msg:'你好小程序'
     }
   },
   components: {
      
   }
 }
</script>

<style scoped>

 
</style>
