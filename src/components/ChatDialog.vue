<template>
  <div>
    <div class="mt-7 ml-5 flex justify-between">
      <div class="flex items-start">
        <img :src="userStore.picture" class="rounded-full w-10 mb-3" alt="avatar" />
        <div class="text-slate-600 ml-6 mt-1">
          <p>{{ userStore.name }}</p>
          <p class="text-slate-500 mb-3">media</p>
        </div>
      </div>
      <div class="text-slate-400 mr-4">20:19</div>
    </div>
    <hr />
  </div>
</template>

<script>
import { useUserStore } from '@/stores/userstore'
export default {
  name: 'ChatDialog',
  setup() {
    const userStore = useUserStore()
    return {
      userStore
    }
  }
}
</script>

<style lang="scss" scoped></style>
