<template>
  <div>
    <header>
        <h1>Air-Web MarketPLace</h1>
        <img alt="Vue logo" src="../assets/logo.png">
    </header>
  </div>
</template>

<script>
export default {
  name: 'MyHeader'

}
</script>

<style lang="scss" scoped>
  header {
    border: 2px solid green;
    margin: 2%;
    padding:2%;
    & h1 {
    margin-right: 1%;
    display: inline;
    color: rgb(26, 123, 26);
    }
    & img {
      width: 40px;
    }
  }
</style>