<template>
  <MyNav />
  <!--<Transition name="moveUp">
    <router-view :key="$route.path"/>
  </Transition>-->
  <router-view :key="$route.path"/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.moveUp-enter-active {
  animation: fadeIn 0.5s ease-in;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
