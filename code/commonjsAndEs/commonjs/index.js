
/*
在 commonjs 中每一个 js 文件都是一个单独的模块，我们可以称之为 module；
该模块中，包含 CommonJS 规范的核心变量: exports、module.exports、require；
exports 和 module.exports 可以负责对模块中的内容进行导出；
require 函数可以帮助我们导入其他模块（自定义模块、系统模块、第三方库模块）中的内容；
*/

/*
*
如何解决变量污染的问题。
module.exports，exports，require 三者是如何工作的？又有什么关系？
* */
/*
*
* https://juejin.cn/post/6994224541312483336#heading-6
* */


// main.js
let counter = require('./moduleA').counter;
let incCounter = require('./moduleA').incCounter;
let obj = require('./moduleA').obj;

console.log(counter);  // 3
counter = 100
console.log(obj);  // { a: 1 }
incCounter();
console.log(counter); // 100
console.log(obj);  // { a: 10 }

