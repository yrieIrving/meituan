<template>
 <div>
    <i-button type="success" bind:click="handleClick">这是一个按钮</i-button>
    <h1>{{msg}}</h1>
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
