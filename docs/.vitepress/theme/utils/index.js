export function createFingerprint (domain) { // 生成浏览器指纹
    let fingerprint
    function bin2hex (s) {
        let i, l, n
        let o = ''
        s += ''
        for (i = 0, l = s.length; i < l; i++) {
            n = s.charCodeAt(i)
                .toString(16)
            o += n.length < 2 ? '0' + n : n
        }
        return o
    }

    let canvas = document.createElement('canvas')
    let ctx = canvas.getContext('2d')
    let txt = domain || window.location.host
    ctx.textBaseline = 'top'
    ctx.font = "14px 'Arial'"
    ctx.textBaseline = 'tencent'
    ctx.fillStyle = '#f60'
    ctx.fillRect(125, 1, 62, 20)
    ctx.fillStyle = '#069'
    ctx.fillText(txt, 2, 15)
    ctx.fillStyle = 'rgba(102, 204, 0, 0.7)'
    ctx.fillText(txt, 4, 17)

    let b64 = canvas.toDataURL().replace('data:image/png;base64,', '')
    let bin = atob(b64)
    let crc = bin2hex(bin.slice(-16, -12))
    fingerprint = crc
    window.document.cookie= 'webPoint'+ '=' + fingerprint
    setCookie('webPoint',fingerprint,1)
    return fingerprint
}
export function getCookie(key){
    if(document.cookie.indexOf(key)<0){ return; }
    let cookies=document.cookie.split(";");
    for(let i=0; i<cookies.length; i++){
        let temp=cookies[i].split("=");
        if(temp[0].replace(/\s/g,'')==key){
            return decodeURIComponent(temp[1]);
        }
    }
}
export function setCookie(key,value,day){
    let cookie=key+'='+encodeURIComponent(value);
    if(day>0){
        let date=new Date();
        date.setDate(date.getDate()+day);
        cookie+=';expires='+date;
    }
    document.cookie=cookie;
}

export function deleteCookie(key){
    setCookie(key,'',-1);   //时间设置为已经过期的时间,系统自然会删除
}

export function generateTree(
    list,
    { idName = "_id", parentIdName = "pid", childrenName = "children" } = {}
) {
    const tree = []
    for (const node of list) {
        // 无pid代表根节点
        if (!node[parentIdName]) {
            let temp = { ...node }
            temp[childrenName] = findChildNode(temp[idName], list)
            tree.push(temp)
        }
    }
    function findChildNode(id, list) {
        let children = []
        for (const child of list) {
            id === child[parentIdName] && children.push(child)
        }

        for (const child of children) {
            const temp = findChildNode(child[idName], list)
            if (temp.length) {
                child[childrenName] = temp
            }
        }
        return children
    }

    return tree
}
