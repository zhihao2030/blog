---
title: Vue3设置动态Ref
date: 2024-3-30 18:22:19
sidebar: auto
author: Zzh
tags:
  - 方法总结
  - Vue3
categories:
  - 总结
description: Vue3给元素设置Ref值，需要定义对应的变量，如果是渲染一个100个数据的list，应该如何操作
---
# Vue3设置动态Ref

## Vue3Ref使用的两种形式
```ts
// 第一种形式，引用将存储在与名字匹配的 ref 里
<script setup>
import { ref } from 'vue'

const p = ref()
</script>

<template>
    <p ref="p">hello</p>
</template>
```

```ts
// 第二种形式，ref 可以接收一个函数值，用于对存储引用位置的完全控制
<script setup>
import { ref } from 'vue'

const child = ref()
</script>

<template>
    <ChildComponent :ref="(el) => child = el" />
</template>
```

## 根据第二种实现动态Ref

```typescript
<template>
  <div class="list">
    <div v-for="item in list" :ref="el => getRef(el, item)" :key="item.key">
      {{ item.key }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ComponentPublicInstance } from 'vue'

type refItem = Element | ComponentPublicInstance | null

const list = [
  {
    key: 1
  },
  {
    key: 2
  },
  {
    key: 3
  },
  {
    key: 4
  }
]
const refs: Record<string, refItem> = {}

const getRef = (el: refItem, item: any) => {
  // 存储引用位置
  refs[`listItemRef_${item.key}`] = el
}
onMounted(() => {
  console.log(refs)
})
</script>
```
