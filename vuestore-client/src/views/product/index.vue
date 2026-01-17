<template>
    <div>
        <div id="page-wrap">
            <div class="grid-wrap">
                <productItem
                    v-for="product in products"
                    :key="product.id"
                    :product="product"
                />
            </div>
        </div>
    </div>
</template>

<script>
import {products} from '../../data-seed'
import productItem from '../../components/productItem.vue'
export default {
    name: 'ProductIndex',
    components:{
        productItem
    },
    data(){
        return {
            products
        }
    },

}
</script>

<style scoped>
.grid-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 16px;
}

</style>