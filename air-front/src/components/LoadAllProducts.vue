<template>
  <div>
    <ul v-for="res in resGet" :key="res.id">
      <li> <h2>{{ res.label }}</h2></li>
      <li><strong> {{ res.price/100 }} €</strong> </li>
      <details>
        <summary>Description du produit</summary>
        <p> {{ res.description }} </p>
        <button @click="addCart(res.id)">Ajouter Au Panier</button>
      </details>
    </ul>
  </div>
</template>

<script setup>
  import Swal from 'sweetalert2'
  import { useStore } from 'vuex'
  import useMyFetch from '@/composables/useMyFetchHelpers'
  const store = useStore()
  const {resGet, myGet} = useMyFetch()
  console.log('store :', store.state.cart)
  myGet('http://localhost:3000/products')
  const addCart = (idProduct) => {
    console.log('[products]:',store.state.products)
    store.commit('addCart')
    store.commit('saveProduct', idProduct)
    
    console.log('[products]:',store.state.products)
    Swal.fire({
      icon: 'success',
      title: 'Merci',
      text: 'Cet article est bien ajouté à votre panier',
    })
  }
</script>

<style lang="scss" scoped>
  ul {
    border: 3px solid rgb(0, 174, 255);
    margin:4% auto;
    padding:1%;
    list-style: none;
    max-width: 60%;
    background-color: whitesmoke;
    & strong {
      color: rgb(0, 106, 255);
    }
    button {
      border-radius: 5px;
      background-color: rgb(0, 187, 255);
      color: white;
      padding:1%;
      &:active {
        color: black;
        background-color: white;
      }
    }
  }
</style>