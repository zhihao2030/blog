<template>
  <div class="char-record">
  <template v-for="(record, index) in list" :key="index">
    <div class="chat-item">
      <a-card hoverable>
        <div class="flex-box">
          <span class="avatar"><UserOutlined /></span>
          <div class="content">{{record.user}}</div>
        </div>
        <div class="flex-box" :style="{color: '#000'}">
          <span class="avatar"><icon /></span>
          <div class="content">{{record.openAi}}</div>
        </div>
      </a-card>
    </div>

  </template>
  </div>
</template>

<script setup>
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
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}
.flex-box .avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-right: 16px;
  color: var(--color-text-2);
  font-size: 16px;
  background-color: var(--color-fill-3);
  border-radius: 50%;
}
.flex-box .content {
  flex: 1;
  color: var(--color-text-2);
  font-size: 12px;
  line-height: 20px;
}
.chat-item {
  margin-bottom: 15px;
}
</style>
