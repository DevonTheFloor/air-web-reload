<template>
  <nav id="nav">
    <ul>
      <li>
        <router-link to="/">Accueil</router-link> 
      </li>
      <li>
        <router-link to="/notre-catalogue">Notre Catalogue</router-link> 
      </li>
      <li>
        <router-link to="/votre-panier">Votre Panier</router-link> 
      </li>
      <li>
        <router-link to="/login">Login</router-link> 
      </li>
    </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  #nav {
    padding: 10px;
      & a {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
          color: #42b983;
        }
      }
  }

  #nav ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    & li {
        margin: 5px;
    margin: auto;
    }
  }

</style>
