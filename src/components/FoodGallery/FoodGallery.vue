<template>
    <div class="foodGallery-container">
        <h2 class="foodGallery-container__header">
            | 招牌特色 |
        </h2>
        <Menu class="foodGallery-container__content" v-for="(type, index) in MenuType" :key="`menu-${type}-${index}`" :title=type />
    </div>
</template>

<script>

import Menu from './Menu.vue';
export default {
    name: "FoodGallery",
    components: {
        Menu,
    },
    setup() {
        const MenuType = ["noodle", "main", "rice"];

        return {
            MenuType,
        }
    }
}
</script>

<style lang="scss" scoped>
.foodGallery-container {
    background-color: #f0f0f0;

    &__header {
        font-size: 30px;
        font-weight: bold;
        padding: 30px 0px;
        
    }
    &__content{
        padding-bottom: 20px;
    }

}
</style>