<template>
<div >

  <el-col :span="6">
<el-select  class="group" v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
   </el-col> 
 
    <el-table  class="group" :data="tableData" >
      <el-table-column
        prop="date"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="组"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="电话">
      </el-table-column>
    </el-table>  

 


 
 

 
    
    </div>
</template>
<style scoped>
.group{
 
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 20px;
}
</style>
<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
      }
    }
  }
  </script>