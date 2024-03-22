<template>
  <div class="w-full h-[93vh]">
    <div v-if="userStore.userDataForChat.length">
      <div class="h-20 bg-[#e7e8e9] shadow-lg flex items-center justify-between">
        <div class="flex items-center">
          <img :src="userStore.picture" class="rounded-full w-12 ml-4" alt="avatar" />
          <div class="ml-5 text-slate-800">
            <p class="text-lg">{{ userStore.name }}</p>
            <p class="text-sm mt-1">online</p>
          </div>
        </div>
        <DotVerticalIcon class="mr-5" />
      </div>
      <div class="content w-full h-[85vh] overflow-auto">
        <ChatSection />
      </div>
      <div>
        <footerPage />
      </div>
    </div>
    <div v-else>
      <EmptyChat />
    </div>
  </div>
</template>

<script>
import EmptyChat from './EmptyChat.vue'
import DotVerticalIcon from 'vue-material-design-icons/DotsVertical.vue'
import ChatSection from './ChatSection.vue'
import { useUserStore } from '@/stores/userstore'
import footerPage from './footer.vue'

export default {
  name: 'ChatBox',
  components: {
    EmptyChat,
    DotVerticalIcon,
    ChatSection,
    footerPage
  },
  setup() {
    const userStore = useUserStore()

    return {
      userStore
    }
  }
}
</script>

<style scoped>
.content {
  background-image: url('../assets/bg.png');
}
</style>
