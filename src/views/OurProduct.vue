<template>
  <MyHeader />
  <MyNav />
  <p>Voici notre catalgue, en vous souhaitant une bonne navigation sur notre market place.</p>
  <Suspense>
    <template #default>
      <LoadProducts />
    </template>
    <template #fallback>
      Don't worry, It's become...
    </template>
  </Suspense>
</template>

<script setup>
  import LoadProducts from '@/components/LoadCatalog'
  import MyHeader from '@/components/MyHeader'
  import MyNav from '@/components/MyNav'
  

</script>

<style>

</style>