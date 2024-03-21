<template>
  <div
    class="w-[1000px] border absolute top-[130px] left-[22%] bg-white h-[1000px]shadow-2xl rounded-sm"
  >
    <div class="flex justify-around pt-16 pl-4">
      <div class="text-gray-600">
        <p class="text-3xl">Use WhatsApp on your computer</p>
        <p class="pt-12 text-lg">1. Open WhatsApp on your phone</p>
        <p class="flex pt-5 text-lg">
          2. Tap Menu
          <DotVerticalIcon
            fillColor="#8d9599"
            :size="20"
            class="mt-1 px-0 bg-slate-100 rounded-sm mx-1"
          />
          on Android, or Settings
        </p>
        <p class="pt-5 text-lg">3. Tap Linked devices and then Link a device</p>
        <p class="pt-5 text-lg">4. Point your phone at this screen to capture the QR code</p>
      </div>

      <div class="ml-4">
        <img src="../assets/qrcode.jpg" alt="qrcode" class="w-[280px]" />
      </div>
    </div>
    <hr horizontal class="h-4 w-[900px] my-8 mx-auto" />
    <div class="flex justify-between mr-10">
      <p class="ml-10 text-lg text-[#00a884]">Link with phone number</p>
      <GoogleLogin :callback="callback" />
    </div>
    <IframePage />
  </div>
</template>

<script>
import DotVerticalIcon from 'vue-material-design-icons/DotsVertical.vue'
import IframePage from './Iframe.vue'
import { useUserStore } from '../stores/userstore'
import { useRouter } from 'vue-router'
export default {
  name: 'LoginPage',
  components: {
    DotVerticalIcon,
    IframePage
  },
  setup() {
    const useStore = useUserStore()
    const router = useRouter()
    const callback = async (response) => {
      useStore.getUserDetailsFromGoogle(response)
      setTimeout(() => {
        router.push('/')
      }, 2000)
    }
    return {
      callback,
      useStore
    }
  }
}
</script>

<style lang="scss" scoped></style>
