<template>
  <nav id="nav">
    <ul>
      <li>
        <router-link to="/">Accueil</router-link> 
      </li>
      <li>
        <router-link to="/notre-catalogue">Notre Catalogue</router-link> 
      </li>
      <li>
        <router-link to="/votre-panier">
          Votre Panier
        </router-link><span id="co-cart">{{ cart }}</span>
      </li>
      <li>
        <router-link to="/login">{{login}}</router-link> 
      </li>
      <li>
        <router-link to="/tous-nos-produits">Tous Nos Produits</router-link> 
      </li>
    </ul>
  </nav>
</template>

<script setup>

import {useStore} from 'vuex'
import { computed } from 'vue'
const store = useStore()
const user = store.state.user
const logged = store.state.login
const login = computed(()=> {
  if(logged == false ) {
    return "Se Connecter"
  } else {
    return user
    }
  })
const cart = computed(() => store.state.cart)

</script>

<style lang="scss" scoped>
  #nav {
    padding: 10px;
      & a {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
          color: rgb(57, 189, 206);
        }
      }
  }

  #nav ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    & li {
      margin: 5px;
      margin: auto;
    }
  }
  #co-cart {
    color: rgb(57, 189, 206);
    font-size: 30px;
  }
  @media (max-width: 600px) {
    #nav ul{
      flex-direction: column;
      margin: 5%;
      & li {
        margin: 2%;
      }
    }
   }

</style>
