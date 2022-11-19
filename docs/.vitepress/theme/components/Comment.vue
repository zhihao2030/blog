<template>
  <div id="comment-container"></div>
</template>

<script lang="ts" setup>
import {  onMounted } from 'vue'
import { useData } from 'vitepress'
import { Message } from '@arco-design/web-vue'
import '@arco-design/web-vue/es/message/style/css.js'
import Gitalk from 'gitalk'
import $ from 'jquery'
import '../styles/gitalk.css'

const props = defineProps({
  commentConfig: Object
})



// 初始化评论组件配置
const { page } = useData()

const getKey = () => {
  return  Date.now().toString(36) + page.relativePath
}


const gitalk = new Gitalk({
    clientID: 'd8f5b34416d403c173d9',
    clientSecret: '43b8e42adec815a50860c7f67c3fa5e57851d480',
    repo: 'comment',
    owner: 'zhihao2030',
    admin: ['zhihao2030'],
    id: location.pathname.substr(0, 50),
    language: 'zh-CN',
    distractionFreeMode: false,
    // 默认: https://cors-anywhere.azm.workers.dev/https://github.com/login/oauth/access_token
    proxy: '/github/login/oauth/access_token'
  })


// 渲染评论组件
onMounted(() => {
    gitalk.render('comment-container')

    // 如果点赞，先判断有没有登录
    let $gc = $('#comment-container');
    $gc.on('click', '.gt-comment-like', function () {
      if (!window.localStorage.getItem('GT_ACCESS_TOKEN')) {
        Message.warning({
          content:'点赞前，请您先进行登录',
          closable: true
        })

        return false
      }
      return true
    })
    // 提交评论后输入框高度没有重置bug
    $gc.on('click', '.gt-header-controls .gt-btn-public', function () {
      let $gt = $('.gt-header-textarea')
      $gt.css('height', '72px')
    })
    // 点击预览时，隐藏评论按钮
    $gc.on('click', '.gt-header-controls .gt-btn-preview', function () {
      let pl = $('.gt-header-controls .gt-btn-public');
      if (pl.hasClass('hide')) {
        pl.removeClass('hide')
      } else {
        // 隐藏
        pl.addClass('hide')
      }
    })

})
</script>

<style scoped>
</style>
