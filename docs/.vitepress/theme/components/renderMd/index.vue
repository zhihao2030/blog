<script setup>
import useRenderMd from "./useRenderMd.js";

const props = defineProps({
  content: {
    type: String,
    default: ''
  }
})

const {res} = useRenderMd(props)
</script>

<template>
    <div class="renderMd-wrap">
      <div class="content markdown-body" v-html="res"></div>
    </div>
</template>

<style scoped lang='scss'>
.renderMd-wrap {

    }
</style>
