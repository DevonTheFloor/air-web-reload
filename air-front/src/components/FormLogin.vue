<template>
  <div>
    <form @submit.prevent="connex">
      <h3>Se Connecter avec GITHUB</h3> 
      <button>{{ connexion }}</button>
    </form>
  </div>
</template>

<script setup>
  import Swal from 'sweetalert2'
  import { computed } from 'vue'
  import { useRouter } from 'vue-router'
  import { useStore } from 'vuex'
  const store = useStore()
  const router = useRouter()
  const logged = store.state.login
  const connexion = computed(()=> {
  if(logged == false ) {
    return "Se Connecter avec GITHUB"
  } else {
    return "Se Déconnecter"
    }
  })

  const connex = () => {
    if (logged == false) {
          Swal.fire({
      title: 'Submit your Github username',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'go!',
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        return fetch(`//api.github.com/users/${login}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText)
            }
            return response.json()
          })
          .catch(error => {
            Swal.showValidationMessage(
              `Request failed: ${error}`
            )
          })
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        store.commit('usercome', result.value.login)
        store.commit('logging')
        setTimeout(()=> router.push("/"), 3000)
        Swal.fire({
          title: `Bonjour ${result.value.login}`,
          imageUrl: result.value.avatar_url
        })
      }
    })
    } else {
      store.commit('unlogging')
      setTimeout(()=>{
        router.push("/")
      },400)
    }
}
</script>

<style lang="scss" scoped>
  form {
    border: 1px solid blue;
    margin:2% auto;
    padding:5%;
    width: 50%;
    display: flex;
    flex-direction: column;
    & button {
      margin: auto;
      width: 50%;
      padding: 1%;
      background-color: rgb(0, 208, 255);
      color: white;
      &:active {
        background-color: white;
        color: black;
      }
    }
    & input {
      margin:2% auto;
      width: 50%;
      &:focus {
        border: 2px solid rgb(102, 234, 240);
      }
    }
  }

</style>