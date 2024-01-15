---
title: Vue3-路由组件复用（name相同）- keepalive缓存问题2
date: 2023-11-3 20:32:19
sidebar: auto
author: Zzh
tags:
  - 方法总结
categories:
  - 总结
description: 动态修改Vue路由组件名称，解决 Vue3-路由组件复用（name相同）- keepalive缓存问题
head:
  - - meta
    - name: description
      content: Vue3-路由组件复用（name相同）- keepalive缓存问题
  - - meta
    - name: keywords
      content: vue3,keepalive, 路由组件复用, 缓存，重复，清除缓存
---
# Vue3-路由组件复用（name相同）- keepalive缓存问题

  由前面[Vue3 keepAlive组件源码](https://1270001.xyz/daily/%E6%BA%90%E7%A0%81/Vue3%20keepAlive%E7%BB%84%E4%BB%B6%E6%BA%90%E7%A0%81#vue3-keepalive%E7%BB%84%E4%BB%B6%E6%BA%90%E7%A0%81)
可知，keepAlive是通过组件名称来匹配缓存。 [keepAlive多开复用路由组件缓存问题](https://1270001.xyz/summary/%E4%B8%80%E4%BA%9B%E9%97%AE%E9%A2%98/keepAlive%E5%A4%8D%E7%94%A8%E8%B7%AF%E7%94%B1%E7%BB%84%E4%BB%B6%E7%BC%93%E5%AD%98%E9%97%AE%E9%A2%98#keepalive%E5%A4%9A%E5%BC%80%E5%A4%8D%E7%94%A8%E8%B7%AF%E7%94%B1%E7%BB%84%E4%BB%B6%E7%BC%93%E5%AD%98%E9%97%AE%E9%A2%98),
该方式是通过修改keepalive的源码，增加以当前路由的fullPath为key来配置缓存，该方式涉及到源码层面，不是很友好，下面通过动态修改组件名称来达到同一路由组件独立缓存效果。

## 实现

```javascript
import { h } from 'vue'
export default function useKeepAlive() {
    // cache
    const cache = new Map()
    // 包裹一层，用于设置name（fullPath唯一）
    function refactorComponent(component, route) {
        let wrapper
        if (component) {
            const wrapperName = route.fullPath
            if (cache.has(wrapperName)) {
                wrapper = cache.get(wrapperName)
            } else {
                wrapper = {
                    name: wrapperName,
                    render() {
                        return h(component)
                    }
                }
                cache.set(wrapperName, wrapper)
            }
            return h(wrapper)
        }
    }

    return {
        refactorComponent
    }
}

```

## 使用

```javascript
<router-view v-slot="{ Component, route }">
    <transition appear name="fade-transform" mode="out-in">
        <keep-alive :include="keepAliveName">
            <component :is="refactorComponent(Component, vueRoute)" :key="route.fullPath" />
        </keep-alive>
    </transition>
</router-view>
```

## 总结
该方式通过动态修改组件的name，实现组件的独立缓存

