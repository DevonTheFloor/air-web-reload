<template>
  <div>
      <p> {{ this.$store.state.products }} </p>
    <ul v-for="res in resGet" :key="res.id">
      <li> <h2>{{ res.label }}</h2></li>
      <li><strong> {{ res.price/100 }} €</strong> </li>
      <details>
        <summary>Descrition du produit</summary>
        <p> {{ res.description }} </p>
        <button @click="addCart(res.id)">Ajouter Au Panier</button>
      </details>
    </ul>
  </div>
</template>

<script setup>
  import Swal from 'sweetalert2'
  import { useStore } from 'vuex'
  import useMyGet from '@/composables/useMyFetchHelpers'

  const store = useStore()
  const {resGet, myGet} = useMyGet()
  console.log('store :', store.state.cart)
  myGet('http://localhost:3000/products')

  const addCart = async (idProduct) => {
    console.log('[products]:',store.state.products)
    store.commit('addCart')
    const product = await myGet(`http://localhost:3000/products/${idProduct}`)
    store.commit('saveProduct', product)
    console.log('[products]:',store.state.products)
    Swal.fire({
      icon: 'success',
      title: 'Merci',
      text: 'Cet article est bien ajouté à votre panier',
      })
    console.log('id product: ',idProduct)
  }
</script>

<style lang="scss" scoped>
  ul {
    border: 1px solid green;
    margin:4% auto;
    padding:1%;
    list-style: none;
    max-width: 60%;
    & strong {
      color: rgb(43, 118, 43);
    }
    button {
      border-radius: 5px;
      background-color: green;
      color: white;
      padding:1%;
      &:active {
        color: black;
        background-color: whitesmoke;
      }
    }
  }
</style>