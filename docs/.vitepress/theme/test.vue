
<template>333</template>
<script>
import {h, defineComponent } from 'vue'
import {useInstance} from './helpers/composable'
import { useData } from 'vitepress'

export default defineComponent({
  setup(props,ctx) {
    const { page, theme, frontmatter } = useData()
    console.log(page,frontmatter,777)
    console.log(useInstance().$tags,999)
  }
})
</script>
<style scoped>

</style>
