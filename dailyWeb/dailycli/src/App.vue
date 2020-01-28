<template>
  <div id="app">
    <el-container class="main_wrap">
      <el-aside style="background-color: rgb(238, 241, 246)">
       <SideMenu >  
       </SideMenu>
      </el-aside>
      <el-container>
       <el-header style="text-align: right; font-size: 12px">
        <NavMenu></NavMenu>
         </el-header>

         <el-main>
            <router-view     class="menu-right"/>
         </el-main>
        </el-container>
      </el-container>
  

<!-- side vue 文件需要dev容器包裹，才能和router-view并排显示 -->
   
<!-- router-view才能显示路由配置的页面 -->


  </div>
</template>

<script>
import NavMenu from './views/menu/NavMenu.vue'
import SideMenu from './views/menu/SideMenu.vue'

export default {
  name: 'app',
  components: {
    SideMenu,
    NavMenu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 20px; */
}
/* .menu-right{
        margin-left:20px;
    } */
</style>
