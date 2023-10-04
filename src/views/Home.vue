<template>
  <div class="home">
    <div class="logo-box"></div>
    <div class="search-box">
      <input v-model="inpValue" type="text">
      <button @click="toSearch">搜索一下</button>
    </div>
    <div class="hot-link">
      热门搜索：
      <!-- 动态路由传参 -->
      <router-link to="/search/黑马程序员">黑马程序员</router-link>
      <router-link to="/search/前端培训">前端培训</router-link>
      <router-link to="/search/如何成为前端大牛">如何成为前端大牛</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FindMusic',
  data(){
    return{
      inpValue:''
    }
  },
  methods:{
    toSearch(){
      // 通过路径跳转(简易方便)
      //      this.$router.push('/search')
      //      this.$router.push({
      //        path:'/search'
      //      })
      // 通过查询参数传参
      //      this.$router.push(`/search?word=${this.inpValue}`)
     
      //      this.$router.push({
      //       path:'/search',
      //       query:{
      //         word:this.inpValue
      //       }
      //      })
      // 通过路由名字跳转（适合路径名字长的场景）
      //       this.$router.push({
      //         name:'search'
      //       })
      // 通过动态路由传参
        this.$router.push(`/search/${this.inpValue}`)
    }
  }
}
</script>

<style>
.logo-box {
  height: 150px;
  background: url('@/assets/logo.jpeg') no-repeat center;
}
.search-box {
  display: flex;
  justify-content: center;
}
.search-box input {
  width: 400px;
  height: 30px;
  line-height: 30px;
  border: 2px solid #c4c7ce;
  border-radius: 4px 0 0 4px;
  outline: none;
}
.search-box input:focus {
  border: 2px solid #ad2a26;
}
.search-box button {
  width: 100px;
  height: 36px;
  border: none;
  background-color: #ad2a26;
  color: #fff;
  position: relative;
  left: -2px;
  border-radius: 0 4px 4px 0;
}
.hot-link {
  width: 508px;
  height: 60px;
  line-height: 60px;
  margin: 0 auto;
}
.hot-link a {
  margin: 0 5px;
}
</style>