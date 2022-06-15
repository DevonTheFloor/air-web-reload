<template>
  <MyHeader />
  <MyNav />
  <p>Vous avez <span id="co-cart"> {{ cart }} </span> produit dans votre panier</p>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed }  from 'vue'
import MyNav from '@/components/MyNav.vue'
import MyHeader from '@/components/MyHeader'

const store = useStore()
const cart = computed(() => store.state.cart)
 

</script>

<style lang="scss">
  #co-cart {
    color: green;
    font-size: 30px;
  }
</style>