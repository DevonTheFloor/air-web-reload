import Swal from 'sweetalert2'
import { useStore } from 'vuex'

export default function addCart(idProduct){
  const store = useStore()

  console.log('[products]:',store.state.products)
  store.commit('addCart')
  store.commit('saveProduct', idProduct)  
  Swal.fire({
    icon: 'success',
    title: 'Merci',
    text: 'Cet article est bien ajouté à votre panier',
  })
}