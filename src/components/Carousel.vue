<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="carousel-container">
        <el-carousel :height="bannerHeight" :initial-index="0" :autoplay="true" :interval="3000" trigger="click" indicator-position="none"
            arrow="hover">
            <el-carousel-item v-for="(item,index) in CarouselData" :key="`CarouselImage-${index}`">
                <!-- content -->
                <img ref="bannerImg" class="carousel-container__image" :src="item.url" />
            </el-carousel-item>
        </el-carousel>

    </div>
</template>

<script>
//nextTick用于将回调推迟到下一个dom更新周期之后执行，
//再更改了一些数据以等待DOM更新后立即使用他
import { reactive,ref,onMounted } from 'vue';
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Carousel",
    setup() {

        let bannerHeight = ref('40vw');
        let screenWidth = null;

        onMounted( ()=>{
            let screenWidth = document.body.clientWidth;
            if (screenWidth < 768){
                bannerHeight.value = '80vw';
            }
        })

        
        //获取轮播图片的节点
        const CarouselData = reactive([
            {url: require("@/assets/CarouselImage/Image1.png")},
            {url: require("@/assets/CarouselImage/Image2.png")},
            {url: require("@/assets/CarouselImage/Image3.png")},
            {url: require("@/assets/CarouselImage/Image4.png")},
            
        ]);
    
        return {
            CarouselData,
            bannerHeight,
            screenWidth
        }
        
    }
}
</script>

<style lang="scss" scoped>
.carousel-container{
    
    &__image{
        height:100%;
        width: 100%;
        object-fit: fill;
    }
}
</style>