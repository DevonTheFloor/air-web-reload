<template>
  <div class="home">
    <MyHeader/>
    <MyNav />
    <WellcomeHome msg="Bienvenue sur le market place de AIR-Web" />
  </div>
</template>

<script setup>
// @ is an alias to /src
import WellcomeHome from '@/components/WellcomeHome.vue'
import MyHeader from '@/components/MyHeader.vue'
import MyNav from '@/components/MyNav.vue'


</script>
