<template>
   <ul class="categories">
    <li>
      <h2> {{ resGet.label}} </h2>
      <details open>
        <summary><strong>{{ resGet.label }}</strong></summary>
        <p> {{ resGet.description }} </p>
        <p>Id de categorie:  {{ resGet.id }}</p>

       <router-link :to="{
          name: 'AllProductsInCategory', 
          params:{ idcat: resGet.id, cat: resGet.label}
          }"
        >
          <button>Voir Tous Les  {{resGet.label}}</button>
        </router-link>
      </details>
    </li>
  </ul>
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
    border: 2px solid rgb(57, 189, 206);
    border-radius: 5px;
    list-style: none;
    & li {
      margin: 4%;
    }
    &:hover {
      box-shadow: 12px 12px 2px 1px rgba(3, 94, 102, 0.2);
    }
    & p {
      margin: 2%;
      padding: 2%;
    }
    button{
      min-width: 15%;
      background-color: rgb(57, 134, 206);
      color: white;
      border-radius: 5px;
      padding: 1%;
      &:hover {
        cursor: pointer;
      }
    }
    
  }
  summary {
    font-size: 1.2em;
    color: blue;
    margin: 1%;
    & p {
      margin: 2%;
    }
    
  }
  router-link {
    color: whitesmoke;
  }
</style>