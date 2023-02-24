<template>
  <div class="chat-ui">
    <charRecord :list="recordList" />
    <loading :position="false" v-show="show" />
    <div class="tip">
      <a-alert closable title="提示">
        <p>本网站通过调用chatGpt的API，实现免登陆可使用</p>
        <span class="title">存在的问题：</span>
        <p>1. 由于是API的调用，再加上需要等待机器人回答完之后才会返回结果，所以问题的回答文字较多的时候响应会比较慢</p>
        <p>2. 晚上20点到24点网络比较拥挤，可能出现无响应的情况</p>
        <p>3. 由于服务器配置较低，后台暂时限制最多20个人能保持有上下文的对话，更新策略为LUR</p>
        <p>4. 其他功能还在实现中...</p>
      </a-alert>
    </div>
    <div class="chat-input">
      <a-textarea
          v-model="inputValue"
          :autosize="{ minRows: 2, maxRows: 6 }"
          type="textarea"
          ref="inputRef"
          :disabled="show"
          placeholder="Please enter something"
          allow-clear @press-enter="send"
          :loading="show">
        <template #suffix>
          <a-button size="medium" type="text" shape="circle" @click="send" :loading="show">
            <SendOutlined style="font-size: 18px"/>
          </a-button>
        </template>
      </a-textarea>
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
p {
  margin: 0 !important;
}
.title {
  font-size: 15px;
  font-weight: bold;
  display: inline-block;
  margin-top: 10px;
}
</style>
