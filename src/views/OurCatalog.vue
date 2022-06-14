<template>
  <MyHeader />
  <MyNav />
  <p>Voici notre catalgue, en vous souhaitant une bonne navigation sur notre market place.</p>
  <Suspense>
    <p> {{ user }}</p>
  </Suspense>
  <p><strong>OUT SUSPENSE :</strong><br> {{ user }} </p>
</template>

<script setup>
import MyHeader from '@/components/MyHeader'
import MyNav from '@/components/MyNav'

import { ref } from 'vue'
const user = ref(null)
  fetch('https://api.github.com/users/devonthefloor')
  .then(response => response.json())
  .then(data => user.value = data)


</script>

<style>

</style>