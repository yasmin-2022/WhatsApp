<template>
  <div class="flex justify-between items-center h-16 bg-[#e7e8e9] relative top-[-79px] p-10">
    <div class="flex">
      <EmoticonExcitedOutlineIcon class="text-gray-500" :size="40" />
      <PaperClipIcon class="text-gray-500" :size="40" />
    </div>
    <input type="text" class="w-[1000px] h-16 outline-none placeholder:text-[20px]" />
    <SendIcon class="text-gray-500" :size="40" />
  </div>
</template>

<script>
import EmoticonExcitedOutlineIcon from 'vue-material-design-icons/EmoticonExcitedOutline.vue'
import PaperClipIcon from 'vue-material-design-icons/Paperclip.vue'
import SendIcon from 'vue-material-design-icons/Send.vue'

export default {
  name: 'footerPage',
  components: {
    EmoticonExcitedOutlineIcon,
    PaperClipIcon,
    SendIcon
  }
}
</script>

<style lang="scss" scoped></style>
