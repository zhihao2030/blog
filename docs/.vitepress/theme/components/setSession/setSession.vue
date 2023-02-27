<template>
  <a-input v-model="inputValue" placeholder="Please enter something" allow-clear>
    <template #suffix>
      <a-button type="text" shape="circle" @click="send">
        <SendOutlined />
      </a-button>
    </template>
  </a-input>
</template>

<script setup>
import {ref} from "vue";
import {Message} from "@arco-design/web-vue";
import {SendOutlined} from '@ant-design/icons-vue'

const inputValue = ref(null)
const send = async () =>{
  try {
    const response = await fetch(`/checkComment?msg=${inputValue.value}`)
    let {data,flag,msg} = await response.json();
    Message.success(msg)
  } catch(e) {
    console.log(e)
    Message.error('未知错误')
  }
}
</script>

<style scoped>

</style>
