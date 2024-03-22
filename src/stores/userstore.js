import { defineStore } from 'pinia'
import axios from 'axios'
import { v4 as uuid } from 'uuid'
import { db } from '@/firebase-init'
import { setDoc, getDoc, doc, collection, getDocs, updateDoc, arrayUnion } from 'firebase/firestore'
export const useUserStore = defineStore('userStore', {
  state: () => ({
    sub: '',
    email: '',
    picture: '',
    firstName: '',
    LastName: '',
    name: '',
    allUsers: [],
    userDataForChat: [],
    showFindFriends: false
  }),
  actions: {
    async getUserDetailsFromGoogle(data) {
      try {
        let res = await axios.post('http://localhost:8000/api/google-login', {
          token: data.credential
        })
        console.log(res)
        let userExists = await this.checkIfUserExist(res.data.sub)
        if (!userExists) await this.saveUserDetails(res)
        this.sub = res.data.sub
        this.emial = res.data.email
        this.picture = res.data.picture
        this.firstName = res.data.given_name
        this.LastName = res.data.family_name
        this.name = res.data.name
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    },
    async checkIfUserExist(id) {
      const docRef = doc(db, 'users', id)
      const docSnap = await getDoc(docRef)
      return docSnap.exists()
    },
    async saveUserDetails(res) {
      try {
        await setDoc(doc(db, 'users', res.data.sub), {
          sub: res.data.sub,
          email: res.data.email,
          picture: res.data.picture,
          firstName: res.data.given_name,
          LastName: res.data.family_name,
          name: res.data.name
        })
      } catch (err) {
        console.log(err)
      }
    },
    async getAllUsers() {
      const querySnapshot = await getDocs(collection(db, 'users'))
      let results = []
      querySnapshot.forEach((doc) => {
        results.push(doc.data())
      })
      if (results.length) {
        this.allUsers = []
        results.forEach((res) => {
          this.allUsers.push(res)
        })
      }
    },
    async sendMessage(data) {
      let id = null
      let msg = null
      try {
        if (data.chatId) {
          await updateDoc(doc(db, `chat/${data.chatId}`), {
            sub1HasViewed: false,
            sub2HasViewed: false,
            messages: arrayUnion({
              sub: this.sub,
              message: data.message,
              createAt: Date.now()
            })
          })
        } else {
          await setDoc(doc(db, `chat/${data.id}`), {
            sub1HasViewed: false,
            sub2HasViewed: false,
            messages: arrayUnion({
              sub: this.sub,
              message: data.message,
              createAt: Date.now()
            })
          })
        }
      } catch (err) {
        console.log(err)
      }
    },
    logout() {
      ;(this.sub = ''),
        (this.email = ''),
        (this.picture = ''),
        (this.firstName = ''),
        (this.LastName = ''),
        (this.name = '')
    }
  },
  persist: true
})
