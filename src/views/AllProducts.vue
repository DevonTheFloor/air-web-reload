<template>
  <div>
    <MyHeader />
    <MyNav />
    <ul v-for="res in resGet" :key="res">
      <li> Intitulé :{{ res.label }} </li>
      <li> Categorie n°: {{ res.category_id }} </li>
    </ul>
    <p><pre>{{ resGet }}</pre>  </p>
  </div>
</template>

<script setup>
import MyHeader from '@/components/MyHeader.vue'
import MyNav from '@/components/MyNav.vue'
import useMyGet from '@/composables/useMyFetchHelpers'

const {resGet, myGet} = useMyGet()

myGet('http://localhost:3000/products')

</script>

<style lang="scss" scoped>

</style>