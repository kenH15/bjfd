<template>
  <div>
  <div class="header-container">
    <div class="header-container__logo">
      북경반점
    </div>
    <nav class="header-container__bar">
      <ul>
        <li :class="activeClass == idx ? 'active' : ''" v-for="(item, idx) in navbarList" :key="idx"
          @click="link(item.id, idx)">{{ item.name }}</li>
      </ul>
    </nav>
  </div>
    <nav class="mobile-header-container__bar">
    <ul>
      <li :class="activeClass == idx ? 'active' : ''" v-for="(item, idx) in navbarList" :key="idx"
        @click="link(item.id, idx)">
        {{ item.name }}</li>
    </ul>
  </nav>
</div>
</template>

<script>
import { ref } from 'vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  setup() {
    const navbarList = [{ "name": "回到顶部", "id": "top" }, { "name": "招牌特色", "id": "specialDish" },
    { "name": "全部菜单", "id": "menu" },
    { "name": "联系我们", "id": "contact" }];


    let activeClass = ref(-1);
    //滚动某个id到顶部
    const link = (id, idx) => {
      console.log(id);
      activeClass.value = idx;
      console.log(activeClass.value);
      let target = document.getElementById(id);
      target.scrollIntoView(true);
      let scrollParameter = document.getElementsByClassName('header-container')[0].offsetHeight;
      console.log('scrollParameter', scrollParameter);
      if (screen.availWidth<768){
        scrollParameter = scrollParameter+50;
      }
      window.scrollBy(0, -scrollParameter);
    };
    // const getItem = (idx)=>{

    // }
    return {
      link,
      navbarList,
      activeClass,
    }
  },

}
</script>

<style lang="scss" scoped>
.header-container {
  display: inline-block;
  // height: 90px;
  left: 0;
  display: flex;
  align-items: center;
  background-color: rgba(69, 65, 65, 0.9);


  &__logo {
    flex: 1;

    height: 90px;
    line-height: 90px;
    font-size: 45px;
    font-weight: bold;
    color: rgb(207, 204, 35);
  }

  &__bar {
    flex: 3;
    display: flex;
    flex-direction: row-reverse;


    ul {
      list-style: none;
      color: white;
      font-size: 17px;

      li {
        float: left;
        padding: 10px;

        &.active {
          background-color: gray;
        }

        a {
          text-decoration: none;
          color: white;
        }

        &:hover {
          background-color: gray;
          cursor: pointer;
        }
      }
    }
  }
}

//移动端Header菜单
.mobile-header-container__bar {
  height:50px;
  display:none;
  background:white;
  border-bottom:solid 1px rgba(216, 213, 213, 0.799);
  ul{
    display: flex;
    justify-content: space-around;
    line-height:50px;
    li{
      cursor: pointer;
      &.active {
          background-color: rgb(196, 191, 191);
        }
    }
  }

}

/*手机屏幕 */
@media screen and (max-width: 767px) {
  .header-container {
    &__logo {
      height: 70px;
      line-height: 70px;
      font-size: 40px;
    }

    &__bar {
      display: none;
    }

    
  }
  .mobile-header-container__bar{
      display:block;
    }
}

/*小屏幕*/
@media screen and (min-width: 768px) {

  .header-container {
    &__logo {
      height: 70px;
      line-height: 70px;
      font-size: 40px;
    }
  }
  .mobile-header-container__bar{
      display:none;
    }
    
}

/*中等屏幕*/
@media screen and (min-width:992px) {
  .header-container {
    &__logo {
      height: 90px;
      line-height: 90px;
      font-size: 45px;
    }
  }
  .mobile-header-container__bar{
      display:none;
    }
}

/*pc 端*/
@media screen and (min-width:1200px) {
  .header-container {
    &__logo {
      height: 90px;
      line-height: 90px;
      font-size: 45px;
    }
  }
  .mobile-header-container__bar{
      display:none;
    }
}

</style>



