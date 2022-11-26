<template>
  <div class="card-item-wrap">
      <article class="card">
        <figure class="card-image">
        </figure>
        <div class="card-header">
          <div class="title">
            <a  :href="page.path">{{page.title}}</a>
          </div>

        </div>
        <template v-if="page.description">
          <div class="card-desc">
            <p>
              {{page.description}}
            </p>
          </div>
        </template>
        <div :class="['card-footer',page.description ? '' : 'has-mt']">
          <div class="card-meta card-meta--date">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" display="block" id="Calendar">
              <rect x="2" y="4" width="20" height="18" rx="4"></rect>
              <path d="M8 2v4"></path>
              <path d="M16 2v4"></path>
              <path d="M2 10h20"></path>
            </svg>
            {{page.date}}
          </div>
          <div class="card-meta card-meta--tags" v-if="page.tags && page.tags.length">
            <tags-outlined style="margin-right: 0.25em" />
            <div class="tags">
              <a :href="`/tags?key=${tag}`" v-for="tag in page.tags" :class="{'current-tag': currentTag === tag }">
                {{tag}}
              </a>
            </div>
          </div>

        </div>
      </article>
  </div>
</template>

<script setup>
import { TagsOutlined } from '@ant-design/icons-vue';

const props = defineProps({
  page: {
    type: Object,
    default: () => ({})
  },
  currentTag: {
    type: String,
    default: ''
  }
})
</script>

<style scoped lang="scss">
@import "../../styles/pageList/pageItem.scss";
</style>
