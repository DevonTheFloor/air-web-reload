<template>
  <div>
    <ul v-for="res in resGet" :key="res.id">
      <li> <h2>{{ res.label }}</h2></li>
      <li><strong> {{ res.price/100 }} €</strong> </li>
      <router-link :to="{
        name: 'DetailsProduct',
        params: {id: res.id}
        }">
        <button>Détails</button>
      </router-link>
      <p>res ID: {{res.id}}</p>
    </ul>
  </div>
</template>

<script setup>
import useMyGet from '@/composables/useMyFetchHelpers'

const {resGet, myGet} = useMyGet()

myGet('http://localhost:3000/products')

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
  }
</style>