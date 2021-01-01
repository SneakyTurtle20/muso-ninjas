import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const useCollection = (collection) => {

  const error = ref(null)
  const isPending = ref(false)
  // add a new document
  const addDoc = async (doc) => {
    error.value = null
    isPending.value = true
    try {
      isPending.value = false
      await projectFirestore.collection(collection).add(doc)
    }
    catch(err) {
      console.log(err.message)
      isPending.value = false
      error.value = 'could not send the message'
    }
  }

  return { error, addDoc, isPending }

}

export default useCollection