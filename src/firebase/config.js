import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyAoEsZhP1CPLt8pX4IyyggeRM4qUyoHkS8",
  authDomain: "muso-ninjas-a1552.firebaseapp.com",
  projectId: "muso-ninjas-a1552",
  storageBucket: "muso-ninjas-a1552.appspot.com",
  messagingSenderId: "1025851385318",
  appId: "1:1025851385318:web:a00b84653e54cb0a77a227"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, projectStorage, timestamp }
