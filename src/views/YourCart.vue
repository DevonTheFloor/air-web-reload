<template>
  <MyHeader />
  <MyNav />
  <p>Vous avez <span id="co-cart"> {{ nombre }} </span> produit{{ plusri }} dans votre panier</p>
  <div id="cart">
    <ul v-for="res in resGet" :key="res">
      <li> {{ res.label}} </li>
      <li class="prices">{{ res.price/100 }} €</li>
    </ul>
  </div>
  
</template>

<script setup>
  import { useStore } from 'vuex'
  import { computed }  from 'vue'
  import useMyFetch from '@/composables/useMyFetchHelpers'
  import MyNav from '@/components/MyNav.vue'
  import MyHeader from '@/components/MyHeader'

  const { resGet, myGet } = useMyFetch()
  const store = useStore()
  const nombre = computed(() => store.state.cart)
  const plusri = computed(()=> nombre.value < 1 ? 's' : ' ')
  const productsList = store.state.products

  const panier = []
/*const init = { 
    method: 'POST',
    body: fd,
    mode: 'cors',
    cache: 'default' 
  }*/
  myGet(`http://localhost:3000/mycart/[${productsList}]`)
  console.log('res get :', resGet.value)
  panier.push(resGet)
  console.log('panier :', panier)

</script>

<style lang="scss" scoped>
  #co-cart {
    color: rgb(0, 170, 255);
    font-size: 30px;
  }
  #cart {
    border: 4px solid rgb(0, 170, 255);
    border-radius: 10px;
    width: 70%;
    margin: 4% auto;
    padding: 3%;
  }
  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    font-size: 1.5em;
    justify-content: space-between;
  }
  .prices {
    color: rgb(0, 170, 255);
  }
</style>