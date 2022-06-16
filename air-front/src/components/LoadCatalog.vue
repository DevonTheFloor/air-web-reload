<template>
  <ul v-for="res in resGet" :key="res" class="categories">
    <li>
      <summary></summary>
      <h3>{{ res.label }}</h3>
      <router-link :to="{
        name: 'DetailsCategory', 
        params:{id: res.id}
        }"
      >
        <button>SELECTIONNER</button>
      </router-link>
    </li>
  </ul>
</template>

<script setup>
import  useMyGet from '@/composables/useMyFetchHelpers'

const { resGet, myGet} = useMyGet()
myGet('http://localhost:3000/categories')
</script>

<style lang="scss" scoped>

  .categories {
    max-width: 60%;
    margin: 2% auto;
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