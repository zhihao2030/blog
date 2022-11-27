<template>
  <div class="archive-wrap">
    <!-- 时间轴头部 -->
    <div class="archive-header">
      <a-tag class="content">
        <template #icon>
          <svg class="icon" role="img" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32z m-260 72h96v209.9L621.5 312 572 347.4V136z m220 752H232V136h280v296.9c0 3.3 1 6.6 3 9.3a15.9 15.9 0 0 0 22.3 3.7l83.8-59.9 81.4 59.4c2.7 2 6 3.1 9.4 3.1 8.8 0 16-7.2 16-16V136h64v752z"></path></svg>
        </template>
        共 {{ resolvedBlogsNum }} 篇
      </a-tag>
    </div>
    <div class="archive-main">
      <a-timeline>
        <div class="timeline-item" v-for="(item, year) in archiveObj">
          <a-timeline-item>
            <span class="year">{{year}}</span>
          </a-timeline-item>
          <div class="timeline-item-content">
            <div v-for="(articles, month) in item">
              <a-timeline-item>
                <template #dot>
                  <clock-circle-outlined style="font-size: 16px" />
                </template>
               <span class="month"> {{ month }}</span>
              </a-timeline-item>
              <div class="articles">
                <span v-for="article in articles" class="article">
                    <a-timeline-item :dot-color="getOneColor()">
                       <a class="article-title"  :href="article.path">{{article.title}}</a>
                      <ArticleInfo  class="blog" :article="article" :showCategory="false" :showTags="false"/>
                   </a-timeline-item>
                </span>
              </div>
            </div>
          </div>
        </div>
      </a-timeline>
    </div>
  </div>
</template>

<script setup>
import useArchive from './useArchive'
import { ClockCircleOutlined } from '@ant-design/icons-vue';
import { getOneColor } from '../../helpers/other'
const { resolvedBlogsNum, archiveObj} = useArchive()

console.log(getOneColor())
</script>

<style lang="scss" scoped>
.archive-wrap {
  margin-top: 18px;
  word-break: break-all;
}


.archive-wrap .timeline-item .year {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 0.6em;
  color: var(--vp-c-text-1);
}

 .month {
  display: block;
  color: var(--vp-c-text-1);
  font-size: 16px;
  font-weight: bold;
}

.archive-main {
  margin-top: 10px;
}
:deep(.arco-timeline-item-content) {
  //line-height: 1.18;
}
:deep(.arco-timeline-item-dot-custom) {
  background-color: transparent;
}

.article-title {
  font-weight: 600;
  margin-bottom: 5px;
  text-decoration: none;
  color: var(--vp-c-text-1);
  &:hover {
    color: #1890ff;
  }
}
</style>
