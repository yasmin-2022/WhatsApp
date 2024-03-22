<template>
  <div>
    <div class="mt-7 ml-5 flex justify-between" v-for="user in userStore.allUsers" :key="user">
      <div v-if="hideMe(user)" @click="createNewChat(user)">
        <div class="flex items-start">
          <img :src="user.picture || ''" class="rounded-full w-10 mb-3" alt="avatar" />
          <div class="text-slate-600 ml-6 mt-1">
            <p>{{ user.firstName }} {{ user.LastName }}</p>
            <p class="text-slate-500 mb-3">media</p>
          </div>
        </div>
        <div class="text-slate-400 mr-4">20:19</div>
      </div>
    </div>
  </div>
</template>

<script>
import { useUserStore } from '@/stores/userstore'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
export default {
  name: 'ChatDialog',
  setup() {
    const userStore = useUserStore()
    const { sub, userDataForChat } = storeToRefs(userStore)
    const hideMe = (user) => {
      if (user.sub === sub.value) {
        return false
      }
      return true
    }
    const createNewChat = (user) => {
      userDataForChat.value = []
      userDataForChat.value.push({
        id: '',
        sub1: user.sub,
        firstname: user.firstName,
        Lastname: user.LastName
      })
    }
    onMounted(() => {
      try {
        createNewChat
        userStore.getAllUsers()
      } catch (err) {
        console.log(err)
      }
    })

    return {
      userStore,
      hideMe,
      createNewChat
    }
  }
}
</script>

<style lang="scss" scoped></style>
