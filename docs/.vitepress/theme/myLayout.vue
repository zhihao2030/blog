<template>
  <div class="blog-wrap">
    <Layout>
      <template #home-hero-before><slot name="home-hero-before" />
        <layout-main />
      </template>
      <template #doc-after>
        <Comment v-if="(theme.commentConfig?.showComment ?? true) && (frontmatter?.showComment ?? true)" :commentConfig="theme.commentConfig" :key="getKey()" />
      </template>
    </Layout>
  </div>
</template>

<script lang="ts" setup>
import DefaultTheme from 'vitepress/theme'
import useMediumZoom from './hooks/useMediumZoom.js'
import {useData} from "vitepress";

const { page, theme, frontmatter } = useData()
const getKey = () => {
 return  Date.now().toString(36) + page.relativePath
}
const { Layout } = DefaultTheme

useMediumZoom()

</script>

<style scoped>
</style>
