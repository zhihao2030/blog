<script setup>
import useComment from "./useComment.js";
import MyComment from "./myComment.vue";
import useSendComment from "./useSendComment";
import {getCookie} from "../../utils";

const username = getCookie('webPoint')

const props = defineProps({
  commentList: Array
})

const {list} = useComment(props)

const {sendComment,handleClear} = useSendComment(list)
</script>


<template>
  <div class="my-comment-wrap">
    <template
        v-for="comment in list"
        :key="comment.id">
            <a-divider />
            <a-comment
                align="right"
                :author="comment.username"
                avatar="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
                :content="comment.comment"
                :datetime="comment.time"
            >
              <template #actions>
                <span class="action" v-if="username === 'zzh'" @click="comment.reply=!comment.reply "> <IconMessage /> Reply </span>
              </template>
              <a-comment
                  v-show="comment.reply"
                  align="right"
                  avatar="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
              >
                <template #actions>
                  <a-button key="0" type="secondary" @click="()=>handleClear(comment)"> Cancel </a-button>
                  <a-button key="1" type="primary" @click="()=>sendComment(comment)"> Reply </a-button>
                </template>
                <template #content>
                  <a-input v-model="comment.inputValue" placeholder="请文明评论哦～" />
                </template>
              </a-comment>
              <a-collapse :bordered="comment.children && comment.children.length">
                <a-collapse-item header="" :key="comment.id">
                  <MyComment :commentList="comment.children" />
                </a-collapse-item>
              </a-collapse>
            </a-comment>
    </template>


  </div>
</template>


<style scoped lang="scss">
.my-comment-wrap {
  max-height: 500px;
  overflow: auto;
  width: 100%;
  padding: 0 15px;
}
:deep(.arco-comment-inner-content span.action) {
  cursor: pointer;
}
</style>
