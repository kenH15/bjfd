<template>
    <div class="menu-container">
        <SpecialTitle :title=specialTitle />
        <div class="menu-container__imageBar">
            <ul>
                <li  id="image_li" v-for="(menu, index) in foodGallery" :key="`menu-${menu.title}-${index}`">
                    <a href="">
                        <img v-lazy="menu.url" class="foodImage" >
                        <!-- <img class="foodImage" :src="menu.url"> -->
                        <div class="overlay">
                            <p> {{ menu.title }}<br> {{ menu.titleKr }}</p>
                        </div>
                    </a>
                </li>

            </ul>
        </div>
    </div>
</template>

<script>
//引入加载常量数据
import { FoodGallery } from '@/constants/FoodGallery';


import SpecialTitle from './SpecialTitle.vue';
import { ref} from 'vue';
export default {
    name: "FoodGallery",
    components: {
        SpecialTitle,
    },
    props: {
        title: String //标题
    },
    setup(props) {
        //根据Props选择 title渲染
        let specialTitle = ref();
        switch (props.title) {
            case "noodle": specialTitle = "面类";
                break;
            case "main": specialTitle = "料理类";
                break;
            case "rice": specialTitle = "饭类";
                break;
        }

        let foodGallery = ref([]);
        FoodGallery.forEach((food) => {
            //console.log(food);
            if (food.type == props.title) {
                foodGallery.value.push(food);
            }
        });

        return {
            foodGallery,
            specialTitle,
         
        }
    },
    

};
</script>

<style lang="scss" scoped>
.menu-container {
    &__imageBar {
        text-align: center;

        ul {

            //width: 100%;
            display: flex;
            flex-wrap: wrap;

            justify-content: flex-start;
            @media screen and (max-width: 767px) {
                justify-content: center;
            }
            li {
                //box-sizing: border-box;
                //padding-top:20%;
                //padding:1px 1px;
                display: block;
                position: relative;
                overflow: hidden;
                width: 20%;
                height:0;
                padding-top:20%;
                transition: all 0.4s linear;
                //object-fit: scale-down;
                /*手机屏幕 */
                @media screen and (max-width: 767px) {
                    width: 70%;
                    padding-top:70%;
                }
                /*小屏幕*/
                @media screen and (min-width: 768px) {
                   width:50%;
                   padding-top:50%;
                   
                }

                /*中等屏幕*/
                @media screen and (min-width:992px) {
                    width: 33.33%;
                    padding-top:33.33%;
                    
                   
                }

                /*pc 端*/
                @media screen and (min-width:1200px) {

                    width: 20%;
                    padding-top:20%;
                  
                }

                a {
                    position:absolute;
                    top:0;
                    left:0;
                    right:0;
                    bottom:0;
                    
                    &:hover {
                        cursor: pointer;

                        .overlay {
                            display: block;
                        }

                        .foodImage {
                            transform: scale(1.2);
                        }
                    }
                }

                .overlay {
                    display: none;
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(128, 128, 128, 0.608);

                    p {
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translateX(-50%) translateY(-50%);
                        font-size: 24px;
                        color: white;

                    }


                }
                .foodImage {
                    width: 100%;
                    height: 100%;
                    transition: all 1s;
                }
            }
        }
    }
}
</style>
