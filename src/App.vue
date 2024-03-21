<template>
  <div>
    <!-- <WhatsApp /> -->
    <router-view></router-view>
  </div>
</template>
<script>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from './stores/userstore'
export default {
  name: 'App',
  setup() {
    const userStore = useUserStore()
    onMounted(() => {
      if (!userStore.sub) router.push('/login')
    })
    const router = useRouter()
    return {
      userStore,
      router
    }
  }
}
</script>

<style scoped></style>
