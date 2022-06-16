<template>
  <!--<ul class="categories">
    <li>
      <details>
        <summary><strong>{{ resGet.label }}</strong></summary>
        <p> {{ resGet.description }} </p>
        <router-link :to="{
          name: 'OneCategorie', 
          params:{label: res.label, id: res.id}
          }"
        >
          <button>SELECTIONNER</button>
        </router-link>
      </details>
    </li>
  </ul>--><pre> {{ resGet }} </pre>
</template>

<script setup>
  import { useRoute } from 'vue-router'
  import  useMyGet from '@/composables/useMyFetchHelpers'

  const route = useRoute()
  const id = route.params.id
  console.log('product ID: ', id)
  const { resGet, myGet} = useMyGet()
  myGet(`http://localhost:3000/products/${id}`)
</script>

<style lang="scss" scoped>

  .categories {
    max-width: 70%;
    margin: 3% auto;
    padding:1%;
    border: 2px solid rgb(57, 206, 107);
    border-radius: 5px;
    list-style: none;
    & li {
      margin: 4%;
    }
    &:hover {
      box-shadow: 12px 12px 2px 1px rgba(8, 102, 3, 0.2);
    }
    & p {
      margin: 2%;
      padding: 2%;
    }
    button{
      min-width: 15%;
      background-color: green;
      color: whitesmoke;
      border-radius: 5px;
      padding: 1%;
      &:hover {
        cursor: pointer;
      }
    }
    
  }
  summary {
    font-size: 1.2em;
    color: rgb(58, 115, 58);
    margin: 1%;
    & p {
      margin: 2%;
    }
    
  }
  router-link {
    color: whitesmoke;
  }
</style>