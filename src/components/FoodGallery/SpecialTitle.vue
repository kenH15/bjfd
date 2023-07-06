<template>
  <div class="specialTitle-container">
    <div class="specialTitle-container__title">
        <h2>{{ title }}</h2>
    </div>
  </div>
</template>

<script>
export default {
    name:"SpecialTitle",
    props:{
        title:String,//展示的标题
    },
    setup(){

    }
};
</script>

<style lang="scss" scoped>
.specialTitle-container{
    
    height:50px;
    &__title{
        margin:0 auto;
        text-align: center;
        width:100px;
        font-weight: bold;
        font-size:25px;
        border-bottom: 3px solid #bc2424;
    }
}
</style>