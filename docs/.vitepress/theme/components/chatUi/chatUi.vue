<template>
  <div class="chat-ui">
    <charRecord v-show="!show" :list="recordList" />
    <loading :position="false" v-show="show" />
    <div class="chat-input">
      <a-input v-model="inputValue" placeholder="Please enter something" allow-clear :loading="show">
        <template #suffix>
          <a-button type="text" shape="circle" @click="send">
            <SendOutlined />
          </a-button>
        </template>
      </a-input>
    </div>
  </div>
</template>

<script setup>
import {SendOutlined} from '@ant-design/icons-vue'
import useChat from './useChat'

const { recordList, send, inputValue, show } = useChat()
</script>

<style scoped lang="scss">
.chat-ui {
  .chat-input {
    margin:auto;
    margin-top: 30px;
  }
}
</style>
