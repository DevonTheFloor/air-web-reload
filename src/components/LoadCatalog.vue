<template>
  <ul v-for="res in resGet" :key="res.id" class="categories">
    <li>
      <details open>
      <summary><strong>{{ res.label }}</strong></summary>
      <p>{{ res.description }}</p>
      <button>SELECTIONNER </button>
      </details>
    </li>
  </ul>
</template>

<script setup>
import  useMyGet from '@/composables/useMyFetchHelpers'

const { resGet, myGet} = useMyGet()
myGet()
.then((resp) => {return resp.json})
.then(datas => resGet.value = datas)

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
    &:hover {
      cursor: pointer;
    }
  }

</style>