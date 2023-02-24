<script setup>
import useGptComment from './useGptComment.js'
const {list} = useGptComment()
</script>

<template>
    <div class="chat-comment-wrap">
        <a-comment
            v-for="comment in list"
            :key="comment.id"
            align="right"
            author="Balzac"
            avatar="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
            content="A design is a plan or specification for the construction of an object
          or system or for the implementation of an activity or process, or the
          result of that plan or specification in the form of a prototype,
          product or process."
            datetime="1 hour"
        >
          <template #actions>
            <span class="action" @click="comment.reply=!comment.reply "> <IconMessage /> Reply </span>
          </template>
          <a-comment
              v-show="comment.reply"
              align="right"
              avatar="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
          >
            <template #actions>
              <a-button key="0" type="secondary"> Cancel </a-button>
              <a-button key="1" type="primary"> Reply </a-button>
            </template>
            <template #content>
              <a-input placeholder="Here is you content." />
            </template>
          </a-comment>
          <a-comment
              v-for="childComment in comment.children"
              :key="childComment.id"
              author="Plato"
              avatar="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
              content="Reply content"
              datetime="1 hour"
          >
            <template #actions>
              <span class="action"  @click="childComment.reply=!childComment.reply "> <IconMessage /> Reply </span>
            </template>
            <a-comment
                v-show="childComment.reply"
                align="right"
                avatar="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
            >
              <template #actions>
                <a-button key="0" type="secondary"> Cancel </a-button>
                <a-button key="1" type="primary"> Reply </a-button>
              </template>
              <template #content>
                <a-input placeholder="Here is you content." />
              </template>
            </a-comment>
            <a-comment
                v-for="childComment in comment.children"
                :key="childComment.id"
                author="Plato"
                avatar="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
                content="Reply content"
                datetime="1 hour"
            ></a-comment>
          </a-comment>
        </a-comment>
    </div>
</template>

<style scoped lang='scss'>
.chat-comment-wrap {

    }
</style>
