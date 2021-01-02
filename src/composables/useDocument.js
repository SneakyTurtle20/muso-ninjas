import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const useDocument = (collection, id) => {

  const error = ref(null)
  const isPending = ref(false)

  const docRef = projectFirestore.collection(collection).doc(id)
  // add a new document
  const deleteDoc = async () => {
    isPending.value = true
    error.value = null
 
    try {
      const res = await docRef.delete()
      isPending.value = false
      return res
    } catch (err) {
      console.log(err.message)
      error.value = 'could not delete the document'
      isPending.value = false
    }
  }
  
  const updateDoc = async (updates) => {
    isPending.value = true
    error.value = null
 
    try {
      const res = await docRef.update(updates)
      isPending.value = false
      return res
    } catch (err) {
      console.log(err.message)
      error.value = 'could not update the document'
      isPending.value = false
    }
  }
  return { error, isPending, deleteDoc, updateDoc  }

}

export default useDocument