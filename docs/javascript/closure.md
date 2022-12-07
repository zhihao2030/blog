---
title: 闭包
date: 2022-11-18 13:00:28
sidebar: 'auto'
author: 'zzh'
tags:
  - Javascript
categories:
  - Javascript
---

# [闭包](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures)
::: tip 闭包在MDN中的解释
闭包让开发者可以从内部函数访问外部函数的作用域。在 JavaScript 中，闭包会随着函数的创建而被同时创建。
:::
个人理解：闭包就是上级作用域内变量的生命周期，因为被下级作用域内引用，而没有被释放。就导致上级作用域内的变量，等到下级作用域执行完以后才正常得到释放。

## 词法作用域
```js
function init() {
  var name = "Mozilla"; // name 是一个被 init 创建的局部变量
  function displayName() { // displayName() 是内部函数，一个闭包
      alert(name); // 使用了父函数中声明的变量
  }
  displayName();
}
init();
```
init() 创建了一个局部变量 name 和一个名为 displayName() 的函数。displayName() 是定义在 init() 里的内部函数 ，并且仅在 init() 函数体内可用。请注意，displayName() 没有自己的局部变量。
然而，因为它可以访问到外部函数的变量，所以 displayName() 可以使用父函数 init() 中声明的变量 name 。
::: tip
词法作用域根据源代码中声明变量的位置来确定该变量在何处可用。嵌套函数可访问声明于它们外部作用域的变量
:::

## 闭包作用

### 保存内部状态
```js
function cacheCalc(){
  var cache = new Map() 
  return function (i){
    if(!cache.has(i)) cache.set(i,i*10)
    return cache.get(i)
  }
}

var calc = cacheCalc()
console.log(calc(2)) // 20
```
使用cache保存已计算过的结果，只有当输入数字没有被计算过时，才会计算，否则会返回之前的计算结果，这样就会避免重复计算。
Vue3中也有相似的用法[源码地址](https://github.com/vuejs/core/blob/main/packages/vue/src/index.ts)
<a-image src='https://cdn.jsdelivr.net/gh/zhihao2030/note-img@main/20221205131907.png' />

### 变量私有化

## 缺点
因为闭包会携带包含它的函数的作用域，所以哪怕外部函数执行完成，因为内部函数保存了外部函数中变量的引用，
所以外部函数依然不会被释放，所以过度使用闭包会造成内存占用过多
