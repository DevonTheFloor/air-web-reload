<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <p>
      Vous trouverez ici tous les éléments dont vous avez besoin, n'hésitez à vous inscrire pour sur la page <router-link to="/login">Login</router-link> pour une meilleur expérience utilisateur. 
    </p>
    <img src="@/assets/images/air.png">
  </div>
</template>

<script setup>

</script>
<script>
export default {
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello {
  padding: 2%;
  & img {
  }
}
@media (max-width: 600px) {
  .hello {
    & img {
      max-width:100%;
    }
}
   }

</style>
