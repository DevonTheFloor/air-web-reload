<template>
  <h2>{{ this.$route.params.label }}</h2>
  <div>
    <ul>
      <li v-for="res in resGet" :key="res.id" class="categories" :id="'list' +res.id">
        <p>{{ res.description }}</p>
        <p class="price">
          <strong>{{ res.price/100 }} €</strong> 
        </p>
        <button :class="'btn'+index" @click="addCart">ACHETER</button>
      </li>
    </ul>
  </div>
  <pre> {{ resGet }} </pre>
</template>

<script setup>
  import Swal from 'sweetalert2'
  import {useStore} from 'vuex'
  import { useRoute } from 'vue-router'
  import { ref } from 'vue'
  import  useMyGet from '@/composables/useMyFetchHelpers'

  const route = useRoute()
  const cart = ref([]);
  const catid = route.params.id
  const { resGet, myGet } = useMyGet()
  myGet(`http://localhost:3000/products/${catid}`)

  console.log('cart :', cart)
  const store = useStore()
  const addCart = () => {
    store.commit('addCart')
    console.log('store :', store.state.cart)
    Swal.fire({
      icon: 'success',
      title: 'Cet article a été ajouter à votre panier',
      showConfirmButton: false,
      timer: 2000
    })
  }
</script>

<style lang="scss" scoped>
  h2 {
    color:rgb(58, 115, 58);
  }
  .categories {
    border: 1px solid green;
    border-radius: 5px;
    margin:2% auto;
    padding:2%;
    max-width:70%;
    list-style: none;
    & .price {
      color: green
    }
    button {
      background-color: rgb(62, 177, 62);
      border-radius: 5px;
      color: whitesmoke;
    }
  }
</style>