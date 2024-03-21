<template>
  <div class="h-[110vh] w-full bg-[rgb(238,238,238)]">
    <div class="w-[100vw] h-[223px] bg-[#00a884]">
      <img src="../assets/logo.png" class="w-[150px] ml-[22%] pt-10" alt="" />
    </div>
    <!-- <AppChat v-if="login" /> -->
    <!-- <LoginPage v-if="!login" /> -->
    <RouterView />
  </div>
</template>

<script>
// import LoginPage from './LoginPage.vue'
// import { ref } from 'vue'
// import AppChat from '../components/AppChat.vue'
export default {
  name: 'WhatsApp',
  components: {
    // LoginPage,
    // AppChat
  },
  setup() {
    // let login = ref(true)
    return {
      // login
    }
  }
}
</script>

<style lang="scss" scoped></style>
