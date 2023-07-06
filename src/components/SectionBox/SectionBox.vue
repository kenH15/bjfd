<template>
  <div class="SectionBox">
    <SectionItemVue :size="100" :data="'2020大众点评年度星级商户'"/> 
    <SectionItemVue  :size="100" :data="'2021大众点评年度星级商户'"/> 
    <SectionItemVue  :size="100" :data="'2022大众点评年度星级商户'"/> 
  </div>
</template>

<script>
import SectionItemVue from './SectionItem.vue'
export default {
name:'SectionBox',
components:{
    SectionItemVue,
},
}
</script>
<style lang="scss" scoped>
.SectionBox{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    ///padding:30px 0;
    
}

</style>