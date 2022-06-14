import { ref } from 'vue'

export default function useMyGet() {

  const resGet = ref({})

  const myGet = async (url) => {
    let response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Erreur transmission requête. Statut : ${response.status}`)
    }
    resGet.value =  await response.json()
  }

  return {
    resGet, 
    myGet
    
  }
}
//'http://localhost:3003/categories'
  
/*async function myGet(url) {
    let response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Erreur transmission requête. Statut : ${response.status}`)
    }
    return await response.json()
  }*/

  