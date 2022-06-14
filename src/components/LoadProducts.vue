<template>
  <p> {{ user }} </p>
</template>

<script setup>
  import { ref } from 'vue'

  async function myGet(url) {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Erreur transmission requête. Statut : ${response.status}`)
    }
    return await response.json();
  }
  const user = ref(null)
    /*fetch()
    .then(response => response.json())
    .then(data => user.value = data)*/
  myGet('https://api.github.com/users/devonthefloor')
  .then(data => user.value = data)

</script>

<style>

</style>