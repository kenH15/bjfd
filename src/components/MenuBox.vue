<template>
    <div class="MenuBox-container">
        <h2 class="MenuBox-container__header">
            | 全部菜单 |
        </h2>
        <el-carousel :interval="false" type="card" height="600px">
            <el-carousel-item v-for="item in menuData" :key="item">
                <div>
                    <div style="font-size:30px;">{{ item.value[0] }}</div>
                    <el-table class="table" :show-header="false" :row-style="{ height: '80px' }" :max-height="600"
                        :data=item.value.slice(1) stripe style="width: 100%; ">
                        <el-table-column prop="name" />
                        <el-table-column prop="nameKr" />
                        <el-table-column prop="price" :header-align="center" width="100" />
                    </el-table>
                </div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
// //引入加载菜单常量数据

import { Menu } from '@/constants/Menu';
import { ref } from 'vue';

export default {
    name: 'MenuBox',
    setup() {

        let menuData = ref([]);

        Menu.forEach((foodType) => {
            let foodTypeData = ref([]);

            switch (foodType[0].type) {
                case "noodle": foodTypeData.value.push("面类");
                    break;
                case "main": foodTypeData.value.push("料理");
                    break;
                case "rice": foodTypeData.value.push("饭类");
                    break;
            }

            foodType.forEach((foodData) => {
                foodTypeData.value.push(foodData);
                //console.log(foodData);
            })
            menuData.value.push(foodTypeData);

        })
        console.log('a', menuData);
        console.log(menuData.value[0]._rawValue)
        return {
            menuData
        }
    },
}
</script>

<style lang="scss" scoped>
.MenuBox-container {
    &__header {
        font-size: 30px;
        font-weight: bold;
        padding: 30px 0px;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #b4bf99;
    }

    .el-carousel__item:nth-child(2n + 1) {
        background-color: #e0e6d3;
    }
    .el-table__row{
            @media screen and (max-width: 767px) {
            height: 40px !important;
        }
    }
    .table {
        font-size: 17px;
       
        
        @media screen and (max-width: 767px) {
            font-size:10px;
           
        }
    }

}
</style> 

