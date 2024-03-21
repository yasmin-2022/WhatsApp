<template>
  <div class="absolute top-6 left-6 w-[1730px] h-[93vh] bg-white flex">
    <div>
      <drawer />
    </div>
    <ChatBox />
  </div>
</template>

<script>
import drawer from './Drawer.vue'
import ChatBox from './ChatBox.vue'
export default {
  name: 'AppChat',
  components: {
    drawer,
    ChatBox
  }
}
</script>

<style lang="scss" scoped></style>
