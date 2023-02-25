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
import {watch, ref, onMounted} from "vue";
import ChatComment from "./components/chatComment.vue";
import useNotify from "./hooks/useNotify";
import './utils/setTheme.js'
import setTheme from "./utils/setTheme";


const { page, theme, frontmatter } = useData()
const route = useRoute()
const {handleMessage,cloneNotify} = useNotify()
const showGptComment = ref(false)

const getKey = () => {
 return  Date.now().toString(36) + page.relativePath
}
const { Layout } = DefaultTheme
const commonStore = useCommonStore()
const { showToTop } = useHideToTop()

watch(()=>route.path,(v)=>{
  if(v === '/ChatGPT.html'){
    showGptComment.value = v
    handleMessage()
  } else {
    cloneNotify()
  }
}, {immediate: true})

onMounted(setTheme)

//useMediumZoom()
</script>

<style scoped>
</style>
