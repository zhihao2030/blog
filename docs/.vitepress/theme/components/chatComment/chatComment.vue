<script setup>
import useGptComment from './useGptComment'
import MyComment from "./myComment.vue";
import useSendComment from "./useSendComment";


const {list} = useGptComment()
const {sendComment,comment} = useSendComment(list)
</script>

<template>
    <div class="chat-comment-wrap">

      <a-space direction="vertical" :size="10">
        <a-typography-text type="primary" style="font-size: 18px">
          留言板
        </a-typography-text>
        <a-textarea v-model="comment" placeholder="请文明留言哦"  allow-clear />
        <div class="action">
          <a-button type="outline" size="small" @click="()=>sendComment()">发送</a-button>
        </div>
      </a-space>
        <MyComment :commentList="list" />
    </div>
</template>

<style scoped lang='scss'>
.chat-comment-wrap {
  .action {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 40px;
  }
  :deep(.arco-space-vertical) {
    width: 100%;
  }
}
</style>
