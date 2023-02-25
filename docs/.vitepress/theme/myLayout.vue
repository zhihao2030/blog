<template>
  <div class="blog-wrap">
    <Layout>
      <template #home-hero-before><slot name="home-hero-before" />
        <loading v-show="commonStore.loading" />
        <layout-main v-show="!commonStore.loading" />
      </template>
      <template #doc-after>
        <Comment v-if="(theme.commentConfig?.showComment ?? true) && (frontmatter?.showComment ?? true)" :commentConfig="theme.commentConfig" :key="getKey()" />
        <ChatComment v-if="false" />
      </template>
    </Layout>
  </div>
  <a-back-top v-if="showToTop" />
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import {useData,useRoute} from "vitepress";
import {useCommonStore} from './store/modules/common'
import useHideToTop from './hooks/useHideToTop'
import {watch, ref} from "vue";
import ChatComment from "./components/chatComment.vue";
import {Notification} from '@arco-design/web-vue'

const { page, theme, frontmatter } = useData()
const route = useRoute()
const showGptComment = ref(false)
const handleMessage = ()=> {
    Notification.info({
      title: '提示',
      content: '朋友们，请求太多了，暂时维护，请6点后再来~~',
      position: "topLeft",
      duration: 3000000,
      closable: true
    })
}
watch(()=>route.path,(v)=>{
  showGptComment.value = v === '/ChatGPT.html'
  // handleMessage()
})
const getKey = () => {
 return  Date.now().toString(36) + page.relativePath
}
const { Layout } = DefaultTheme
const commonStore = useCommonStore()
const { showToTop } = useHideToTop()


//useMediumZoom()

</script>

<style scoped>
</style>
