<template>
  <div class="home">
    <Header class="header" />
    <div class="main">
      <Carousel id="top" />
      <FoodGallery id="specialDish" />
      <MenuBox id="menu" />
      <SectionBox />
      <AdressBox id="contact" />
    </div>
    <Footer />
  </div>
</template>

<script>

//引入头部组件
import Header from '@/components/Header';
//引入走马灯组件
import Carousel from '@/components/Carousel.vue';

//引入招牌特色组件
import FoodGallery from '@/components/FoodGallery/FoodGallery.vue';

//引入底部组件
import Footer from '@/components/Footer.vue';

//引入地址(地图)栏组件
import AdressBox from '@/components/AddressBox/AdressBox.vue';

//引入菜单组件
import MenuBox from '@/components/MenuBox.vue';

//引入星级评价组件
import SectionBox from '@/components/SectionBox/SectionBox.vue';

export default {
  name: 'HomeView',
  components: {
    Header,
    Carousel,
    FoodGallery,
    Footer,
    AdressBox,
    MenuBox,
    SectionBox,
  },


}
</script>


<style lang="scss" scoped>
.home {
  .header {
    z-index: 1000000;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }

  .main {
    margin-top: 90px;
    @media screen and (max-width: 992px) {
      margin-top: 70px;
    }
    @media screen and (max-width: 767px) {
      margin-top: 120px;
    }
  }
}
</style>
