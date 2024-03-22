<template>
  <div class="w-[460px] h-[93vh] shadow-lg">
    <div class="h-20 bg-[#e7e8e9] flex justify-between items-center">
      <img :src="userStore.picture" class="w-10 ml-5 rounded-full" alt="" />
      <div class="flex">
        <MessageIcon class="mr-4 text-gray-500" />
        <DotVerticalIcon @click="logout()" class="mr-4 text-gray-500" />
      </div>
    </div>
    <div class="bg-[#e7e8e9] mt-2 mx-2 flex items-center rounded-md">
      <Magnifyicon class="text-[#8d9599] mt-2 mx-6" />
      <input
        @click="showFindFriends = !showFindFriends"
        type="text"
        class="outline-none bg-[#e7e8e9] border-gray-300 w-60 py-2 mt-1"
        placeholder="Start a new chat "
      />
    </div>
    <div>
      <ChatDialog />
    </div>
  </div>
</template>

<script>
import DotVerticalIcon from 'vue-material-design-icons/DotsVertical.vue'
import Magnifyicon from 'vue-material-design-icons/Magnify.vue'
import MessageIcon from 'vue-material-design-icons/Message.vue'
import ChatDialog from './ChatDialog.vue'
import { useUserStore } from '@/stores/userstore'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
export default {
  name: 'DrawerPage',
  components: {
    DotVerticalIcon,
    MessageIcon,
    ChatDialog,
    Magnifyicon
  },
  setup() {
    const userStore = useUserStore()
    const router = useRouter()
    const { showFindFriends } = storeToRefs(userStore)

    const logout = () => {
      let res = confirm('Are you sure you want to logout?')
      if (res) userStore.logout()
      setTimeout(() => {
        router.push('/login')
      })
    }
    return {
      logout,
      userStore
    }
  }
}
</script>

<style lang="scss" scoped></style>
