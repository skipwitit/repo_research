<template>
<div>
  

   
    <el-menu
      :default-active="this.$route.path"
      :router="true" 
      
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>假日保障信息</span>
        </template>
        <el-menu-item-group>
          <template slot="title">假日活动信息收集</template>
          <el-menu-item index="/collection">信息详情</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="值班信息">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">值班日报</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
         <el-submenu index="1-5">
          <template slot="title">监控信息</template>
          <el-menu-item index="1-5-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">周值班列表</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="/week" >
        <i class="el-icon-setting"></i>
        <span slot="title" >人员信息维护</span>
      </el-menu-item>
    </el-menu>

 </div> 
 

</template>
<script>
  export default {
 data() { 
        return { 
            navList:[ 
            {name:'/components/ServiceHall',navItem:'服务大厅'}, 
            {name:'/components/Management',navItem:'权限管理'},
            {name:'/components/User',navItem:'用户管理'}, 
            {name:'/components/Personnel',navItem:'人员数据'}, 
            {name:'/components/Alarm',navItem:'报警中心'}, 
            ] } 
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>