import { defineStore } from 'pinia'
import axios from 'axios'
export const useUserStore = defineStore('userStore', {
  state: () => ({
    sub: '',
    email: '',
    picture: '',
    firstName: '',
    LastName: '',
    name: ''
  }),
  actions: {
    async getUserDetailsFromGoogle(data) {
      try {
        let res = await axios.post('http://localhost:8000/api/google-login', {
          token: data.credential
        })
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
