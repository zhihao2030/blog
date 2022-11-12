<template>
  <div class="blog-wrap">
    <Layout>
      <template #home-hero-before><slot name="home-hero-before" />
        <layout-main />
      </template>
    </Layout>
  </div>
</template>

<script lang="ts" setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme

</script>

<style scoped>
</style>
