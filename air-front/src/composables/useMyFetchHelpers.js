import { ref } from 'vue'

export default function useMyFetch() {

  const resGet = ref({})

  const myGet = async (url) => {
    let response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Erreur transmission requête. Statut : ${response.status}`)
    }
    resGet.value =  await response.json()
  }

  const resPost = ref({})

  const myPost = async (url, init) => {
    let response = await fetch(url, init)
    if (!response.ok) {
      throw new Error(`Erreur transmission requête. Statut : ${response.status}`)
    }
    resGet.value =  await response.json()
  }

  return {
    resGet, 
    resPost,
    myPost,
    myGet
    
  }
}
  