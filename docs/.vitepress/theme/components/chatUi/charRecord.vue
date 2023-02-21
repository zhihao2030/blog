<template>
  <div class="char-record">
  <template v-for="(record, index) in list" :key="index">
    <div class="chat-item" :id="`chat-item-${index}`">
      <a-card hoverable>
        <div class="flex-box">
          <div class="avatar"><UserOutlined /></div>
          <div class="content">{{record.user}}</div>
        </div>
        <a-divider />
        <div class="flex-box">
          <div :style="{display:'flex',justifyContent:'end',width: '100%',marginBottom: '10px'}"><icon /></div>
          <renderMd :content="record.openAi" />
        </div>
      </a-card>
    </div>

  </template>
  </div>
</template>

<script setup>
import 'github-markdown-css/github-markdown.css'
import {UserOutlined} from '@ant-design/icons-vue'
  const props = defineProps({
    list: {
      type: Array,
      default: []
    }
  })
</script>

<style scoped lang="scss">
.flex-box {
  //display: flex;
  //align-items: center;
  //justify-content: center;
  //flex-direction: column;
  margin-bottom: 10px;
}
.flex-box .avatar {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  margin-right: 16px;
  color: var(--color-text-2);
  font-size: 16px;
  background-color: var(--color-fill-3);
  border-radius: 50%;
}
.flex-box .content {
  flex: 1;
  color: var(--vp-c-text-1);
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
}
.chat-item {
  margin-bottom: 15px;
}
:deep(.vuepress-markdown-body:not(.custom)) {
  padding-left: 0 !important;
  padding-right: 0 !important;
}
</style>
