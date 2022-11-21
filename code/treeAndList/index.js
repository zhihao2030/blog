// const array = [
//     { id: '1', name: '节点1' },
//     { id: '2', pid: '1', name: '节点1-1' },
//     { id: '3', pid: '1', name: '节点1-2' },
//     { id: '4',  pid: '2', name: '节点2-1' },
//     { id: '5',  pid: '2', name: '节点2-2' },
// ]
//
// /**
//  *
//  * @param {Array}  list
//  * @param {String} idName
//  * @param {String} parentIdName
//  * @param {String} childrenName
//  * @returns {*[]}
//  */
// function generateTree(list,{idName='id',parentIdName='pid',childrenName='children'}={}) {
//     const tree = []
//     for (const node of list) {
//         // 无pid代表根节点
//         if (!node[parentIdName]) {
//             let temp = {...node}
//             temp[childrenName] = findChildNode(temp[idName],list)
//             tree.push(temp)
//         }
//     }
//     function findChildNode(id,list) {
//         let children = []
//         for (const child of list) {
//             id === child[parentIdName] && children.push(child)
//         }
//
//         for (const child of children) {
//             const temp = findChildNode(child[idName],list)
//             if (temp.length) {
//                 child[childrenName] = temp
//             }
//         }
//         return children
//     }
//
//     return tree
// }
//
// console.log(generateTree(array))

const array = [
    { id: '1', name: '节点1' },
    { id: '2', pid: '1', name: '节点1-1' },
    { id: '3', pid: '1', name: '节点1-2' },
    { id: '4',  pid: '2', name: '节点2-1' },
    { id: '5',  pid: '2', name: '节点2-2' },

]

function generateTree(list,{idName='id',parentIdName='pid',childrenName='children'}={}) {
    const map = {} // 以数组元素id为key 进行映射
    const result = [] // 结果

    for(let i = 0; i < list.length; i++) {

        map[list[i][idName]] = i
    }

    for(let i = 0; i < list.length; i++) {
        const node = list[i]
        // 判断当前节点是否有父节点 - list[map[node[parentIdName]]]
        if (node[parentIdName] && list[map[node[parentIdName]]]) {
            if (!list[map[node[parentIdName]]].children) {
                list[map[node[parentIdName]]].children = []
            }
            list[map[node[parentIdName]]].children.push(node)
        } else {
            result.push(node)
        }
    }

    return result
}

console.log(generateTree(array))
