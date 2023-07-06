<template>
    <div class="adressBox-container">
        <h2 class="adressBox-container__header">
            | 联系我们 |
        </h2>
        <div class="adressBox-container__content">
            <MapBox class="adressBox-container__content__map" />

            <div class="adressBox-container__content__infoContainer">
                
                <div class="adressBox-container__content__infoContainer__info" id="adress">
                    <p class="title">韩式炸酱面 북경반점</p>
                    <p class="value">辽宁省大连市开发区抚顺街11号</p>
                </div>
                <div class="adressBox-container__content__infoContainer__info">
                    <p class="title">详细地址</p>
                    <a href="https://router.map.qq.com/short?l=685798e850e2f9dd4e861d5bdb7a9ca3&tempSource=pcMap"
                        target="_blank" class="value" style="display:block">
                        <el-button>腾讯地图</el-button>           
                    </a>
                </div>
                <div class="adressBox-container__content__infoContainer__info" id="phone">
                    <p class="title">订餐电话</p>
                    <p class="value">0411-87618434</p>
                </div>
                <div class="adressBox-container__content__infoContainer__info" id="time">
                    <p class="title">营业时间</p>
                    <p class="value">10:00~21:30</p>
                </div>
                <div class="adressBox-container__content__infoContainer__info" id="about">
                    <p class="title">介绍</p>
                    <p class="value">北景饭店(북경반점)，2003年成立于大连，专注于韩式炸酱面、糖醋肉等韩式中华料理，致力于提供高质量的美食体验，曾荣获大众点评2020、2021、2022年度星级商户。
                    </p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import MapBox from './MapBox.vue';
export default {
    name: 'AddressBox',
    components: {
        MapBox,
    },
}
</script>

<style lang="scss" scoped>
.adressBox-container {
    background-color: #f0f0f0;
    //margin: 10px 0;



    &__header {
        font-size: 30px;
        font-weight: bold;
        padding: 30px 0px;
    }

    &__content {
        display: flex;
        padding: 0px 30px 50px;

        @media screen and (max-width: 767px) {
            display: block;
        }

        &__map {
            flex: 1;
            box-shadow: 0 0 2px #000;
        }

        &__infoContainer {
            flex: 1;

            &__info {
                text-align: start;
                padding: 16px;
                font-size: 20px;

                @media screen and (max-width: 767px) {
                    padding:14px 0;
                }

                .title {
                    font-weight: bold;
                }

                .value {
                    padding-top: 10px;
                }

            }


        }
    }
}</style>