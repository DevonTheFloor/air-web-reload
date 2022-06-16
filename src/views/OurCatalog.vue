<template>
  <MyHeader />
  <MyNav />
  <p>Voici notre catalgue, vous trouverez ici, toutes les catégiries de produits que nous vous proposons. En vous souhaitant une bonne navigation sur notre market place.</p>
  <Suspense>
    <template #default>
      <LoadCatalog />
    </template>
    <template #fallback>
      Don't worry, It's become...
    </template>
  </Suspense>
</template>

<script setup>
  import LoadCatalog from '@/components/LoadCatalog'
  import MyHeader from '@/components/MyHeader'
  import MyNav from '@/components/MyNav'
  

</script>

<style>

</style>