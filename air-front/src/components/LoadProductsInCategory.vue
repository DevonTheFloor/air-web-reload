<template>
  <h2> {{ cat }} </h2>
  <ul v-for="res in resGet" :key="res" class="categories">
    <li>
      <h3>{{ res.label }}</h3>
      <details>
        <summary>Détails de ce produit</summary>
        <p> {{ res.description }} </p>
        <p class="prices"><strong> {{ res.price/100 }} €</strong></p>
        <p>id produit : {{ res.id }} </p>
        <button @click="addCart(res.id)">Ajouter Au Panier</button>
      </details>
      </li>
  </ul>
</template>

<script setup>
  import Swal from 'sweetalert2'
  import { useStore } from 'vuex'
  import  useMyFetch from '@/composables/useMyFetchHelpers'
  import { useRoute }  from 'vue-router'
  const store = useStore()
  const route = useRoute()
  const idcat = route.params.idcat
  const cat = route.params.cat

  const addCart = (idProduct) => {
    store.commit('addCart')
    store.commit('saveProduct', idProduct)
    
    Swal.fire({
      icon: 'success',
      title: 'Merci',
      text: 'Cet article est bien ajouté à votre panier',
    })
  }

  const { resGet, myGet} = useMyFetch()
  myGet(`http://localhost:3000/products-category/${idcat}`)
</script>

<style lang="scss" scoped>

  .categories {
    max-width: 70%;
    margin: 3% auto;
    padding:1%;
    border: 3px solid rgb(57, 189, 206);
    border-radius: 5px;
    list-style: none;
    background-color: whitesmoke;
    & li {
      margin: 4%;
    }
    &:hover {
      box-shadow: 12px 12px 2px 1px rgba(3, 102, 95, 0.2);
    }
    & p {
      margin: 2%;
      padding: 2%;
    }
    button{
      min-width: 15%;
      background-color: rgb(74, 134, 231);
      color: whitesmoke;
      border-radius: 5px;
      padding: 1%;
      &:hover {
        cursor: pointer;
      }
    }
    .prices {
      color: rgb(74, 134, 231); ;
    }
  }
  summary {
    margin: 1%;
    & p {
      margin: 2%;
    }
    
  }
  router-link {
    color: whitesmoke;
  }
</style>