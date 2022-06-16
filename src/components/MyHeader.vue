<template>
  <div>
    <header>
        <h1></h1>
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
    border: 2px solid blue;
    max-width: 100%;
    background-image: url('../assets/images/airban.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 150px;
    & h1 {
    margin-right: 1%;
    display: inline;
    color:white;
    font-size:3em;
    padding: 2%;
    }
    & img {
      width: 140px;
      padding-top: 2%;
    }
  }
</style>