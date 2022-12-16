// moduleC.js

const msg = require('./moduleB')
const obj = {
    file: 'moduleC'
}
console.log('moduleC.js 文件')
module.exports = function () {
    return obj
}
