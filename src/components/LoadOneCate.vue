<template>
  <h2>{{ this.$route.params.label }}</h2>
  <div v-for="res in resGet" :key="res.id" class="categories">
    <ul>
      <li>
        <p>{{ res.description }}</p>
        <p class="price">
          <strong>{{ res.price/100 }} €</strong> 
        </p>
      </li>
    </ul>
    <button>ACHETER</button>
  </div>
</template>

<script setup>
  import { useRoute } from 'vue-router'
  import  useMyGet from '@/composables/useMyFetchHelpers'

  const route = useRoute()
  const label = route.params.label
  const catid = route.params.id
  console.log('id cat :', label)
  //console.log('id cat', idCat)
  const { resGet, myGet } = useMyGet()
  myGet(`http://localhost:3000/products/${catid}`)
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
    & li {
      list-style: none;
    }
    & img {
      display: initial;
    }
    & .price {
      color: green
    }
  }
</style>