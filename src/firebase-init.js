import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDZB6yyJBfxU0Pi1mzeZJek_GMKEmfBUAU',
  authDomain: 'whatsapp-d2708.firebaseapp.com',
  projectId: 'whatsapp-d2708',
  storageBucket: 'whatsapp-d2708.appspot.com',
  messagingSenderId: '130103893261',
  appId: '1:130103893261:web:089313ec4c9c8182832444'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export { db }
