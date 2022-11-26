<template>
  <div class="tags-wrap">
    <div class="tags">
      <div class="tag-list">
          <span
              v-for="(subItem, subIndex) in resolvedTagList"
              :key="subIndex"
              class="tag-item"
              :style="{ 'backgroundColor': subItem.color }"
              :class="{ 'active': currentTag === subItem.tagName }"
              @click.stop="handleSelectTag(subItem)"
          >{{subItem.tagName}}
             <span class="blog-num">{{subItem.num || ''}}</span>
          </span>

      </div>
      <div class="tag-page">
        <list-item v-for="page in blogsList" :key="page.path" class="blog" :page="page" v-model:currentTag="currentTag" />
      </div>
    </div>
  </div>
</template>

<script setup>
import useTag from './useTag'

const { currentTag, handleSelectTag,resolvedTagList,blogsList } = useTag()

</script>

<style lang="scss" scoped>
.tags-wrap {
  .tag-list {
    display: flex;
    flex-wrap: wrap;
    margin: 30px 0;
    .tag-item {
      vertical-align: middle;
      margin: 4px 4px 10px;
      padding: 4px 8px;
      display: inline-block;
      cursor: pointer;
      border-radius: 0.25rem;
      background: #fff;
      color: #fff;
      line-height: 13px;
      font-size: 13px;
      box-shadow: var(--box-shadow);
      transition: all .3s;
      &:hover{
        transform: scale(1.04);
      }
      &.active {
        transform: scale(1.4);
        font-weight: 700;
        margin: 4px 14px 10px;
      }
      .blog-num {
        font-size: 12px;
      }
    }
  }
}
</style>
