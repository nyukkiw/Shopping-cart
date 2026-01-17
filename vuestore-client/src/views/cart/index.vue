<template>
    <div>
        <div id="page-wrap">
            <h1>
                Shopping cart
            </h1>
            <ItemCart 
            v-for="item in cartItems"
            :key="item.id"
            :item="item"
            />
            <h3 id="total-price">Total:Rp{{ totalPrice }}</h3>
            <button id="checkout-button">Checkout Button</button>
        </div>
</div>
</template>

<script>
import {cartItems} from '../../data-seed'
import itemCart from '../../components/itemCart.vue'

export default {
 name: 'CartIndex',
  components:{
      itemCart
  },
 data(){
    return {
        cartItems
    }
 },
 computed: {
    totalPrice(){
        return this.cartItems.reduce(
            (sum, item) => sum + Number(item.price), 0
        )
    }
 }

}
</script>

<style scoped>
  h1 {
    border-bottom: 1px solid #41B883;
    margin: 0;
    margin-top: 16px;
    padding: 16px;
  }
  #total-price {
    padding: 16px;
    text-align: right;
  }
  #checkout-button {
    width: 100%;
  }
  
</style>