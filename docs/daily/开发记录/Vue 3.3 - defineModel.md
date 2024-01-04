---
title: Vue3.3-defineModel
date: 2024-01-04 12:46:42
sidebar: auto
author: Zzh
tags:
  - Vue3
categories:
  - 开发记录
description: defineModel使组件使用VModel简化
---

# defineModel使组件使用VModel简化
在Vue3中，组件使用VModel，相当于传递modelValue的props，以及监听update:modelValue的event。

以下个人之前常用的组件使用VModel的写法：

### 方式1：使用defineProps和defineEmits加computed

```vue
<!-- 父 -->
<template>
  <span>count</span>
  <Child v-model="count" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const count = ref<number>(0)
</script>

```

```vue
<!-- child.vue -->
<template>
   count: {{ count }}
   <button @click="onClick">count</button>
</template>

<script lang="ts" setup>
   const $props = defineProps<{ modelValue: number }>()
   const $emits = defineEmit<{
      (e: 'update:modelValue', modelValue: number)
      // 注册update:modelValue事件，作为状态更新的回调
   }>()
   const inputValue = computed({
      get() {
         return props.value;
      },
      set(v) {
         $emit('update:value', v);
      },
   });
   function onClick() {
      inputValue.value = 111
   }
</script>


```

### 方式二，使用vueuse/useVModel

```vue
<!-- 父 -->
<template>
  <span>count</span>
  <Child v-model="count" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const count = ref<number>(0)
</script>

```

```vue
<!-- child.vue -->
<template>
   count: {{ count }}
   <button @click="onClick">count</button>
</template>

<script lang="ts" setup>
   const $props = defineProps<{ modelValue: number }>()
   const $emits = defineEmit<{
      (e: 'update:modelValue', modelValue: number)
      // 注册update:modelValue事件，作为状态更新的回调
   }>()
  /* const inputValue = computed({
      get() {
         return props.value;
      },
      set(v) {
         $emit('update:value', v);
      },
   });*/
   const inputValue = useVModel($props, 'modelValue', $emits)
   function onClick() {
      inputValue.value = 111
   }
</script>


```

### 使用defineModel

DefineModel其实为组件实例注册了update:modelValue事件，并且在props的setter中又调用了update:modelValue事件，从而实现的v-model语法糖
```vue
<!-- 父 -->
<template>
  <span>count</span>
  <Child v-model="count" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const count = ref<number>(0)
</script>

```

```vue
<!-- child.vue -->
<template>
   count: {{ count }}
   <button @click="onClick">count</button>
</template>

<script lang="ts" setup>
   /*
 const $props = defineProps<{ modelValue: number }>()
 const $emits = defineEmit<{
    (e: 'update:modelValue', modelValue: number)
    // 注册update:modelValue事件，作为状态更新的回调
  }>()
 const inputValue = computed({
    get() {
       return props.value;
    },
    set(v) {
       $emit('update:value', v);
    },
 })
 const inputValue = useVModel($props, 'modelValue', $emits)
*/
   const inputValue = defineModel();

   function onClick() {
      inputValue.value = 111
   }
</script>
```

### 开启defineModel
```ts
export default defineConfig({
   // ...
  plugins: [
    vue({
      script: {
        defineModel: true,
      },
    }),
  ],
});
```

