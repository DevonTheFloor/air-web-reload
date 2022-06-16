<template>
  <button>
    <slot name="texte"></slot>
  </button>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  button {
    border: 1px solid rgb(34, 0, 255);
    border-radius: 5px;
    background-color: rgb(99, 181, 222);
    color: whitesmoke;
    &:active {
      background-color: whitesmoke;
      color: black;
    }
  }
</style>