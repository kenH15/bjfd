<template>
  <div class="footer-container">
    <span class="footer-container__about">
      <p style="margin-bottom: 10px">关于我们</p>
      <p class="content">北景韩式炸酱面(북경반점)</p>
    </span>
    <span class="footer-container__bshours">
      <p style="margin-bottom: 10px">营业时间</p>
      <p>10:00-21:00</p>
    </span>
    <span class="footer-container__address">
      <p style="margin-bottom: 10px">地址</p>
      <p>辽宁省大连市金普新区抚顺街11号</p>
    </span>
    <span class="footer-container__phone">
      <p style="margin-bottom: 10px">订餐电话</p>
      <p>0411-87618434</p>
    </span>
  </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Footer',

}
</script>

<style lang="scss" scoped>
.footer-container{
    
    height:140px;
    background-color: black;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
   
    &__about{
      flex:2;
      overflow:hidden;
      min-width:0;
      white-space: nowrap;
      .content{
        overflow: hidden;
        text-overflow: ellipsis;
        
      }
    }
    &__bshours{
      flex:2;
    }
    &__adress{
      flex:2;
    }
    &__phone{
      flex:2;
    }
    p{
        font-size:20px;
        color: rgb(160, 160, 160);
      }
    &__bshours{
      color: rgb(160, 160, 160);

    }
}
</style>