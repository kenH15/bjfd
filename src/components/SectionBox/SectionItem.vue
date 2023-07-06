<template>
  <el-card shadow="hover" class="SectionItem">
    
    <el-icon :color="'grey'" :size=size><Bowl /></el-icon>
    <p>{{ data }}</p>
  </el-card>
</template>

<script>
import { Bowl } from "@element-plus/icons-vue";

export default {
name:'SectionItem',
props:{
  data:String,
  size:String,
},
components:{
  
  Bowl,
},
setup(){

}
}
</script>

<style lang="scss" scoped>
.SectionItem{
  display:inline-block;
}
</style>