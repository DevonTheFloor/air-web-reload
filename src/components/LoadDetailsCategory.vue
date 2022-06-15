<template>
  <ul class="categories">
    <li>
      <details open>
        <summary><strong>{{ resGet.label }}</strong></summary>
        <p> {{ resGet.description }} </p>
        <p>Id de categorie:  {{ resGet.id }}</p>
        <router-link :to="{
          name: 'AllProductsInCategory', 
          params:{ id: resGet.id}
          }"
        >
          <button>Voir Tous Les  {{resGet.label}}</button>
        </router-link>
      </details>
    </li>
  </ul>
  <pre> {{ resGet }} </pre>
</template>

<script setup>
  import { useRoute } from 'vue-router'
  import  useMyGet from '@/composables/useMyFetchHelpers'

  const route = useRoute()
  const id = route.params.id
  console.log('categorie ID: ', id)
  const { resGet, myGet} = useMyGet()
  myGet(`http://localhost:3000/categories/${id}`)
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