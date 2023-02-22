import {nextTick, ref} from "vue";
import { Message } from '@arco-design/web-vue';
function createFingerprint (domain) { // 生成浏览器指纹
    var fingerprint
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
   // Cookie.set('webPoint', fingerprint)
    return fingerprint
}

export default function useChat() {
    const recordList = ref([])
    const inputValue = ref(null)
    const show = ref(false)
    const currentChat = ref({})
    const inputRef = ref(null)
    const user = createFingerprint()
    const handleSend = async () => {
        show.value = true
        try {
           const response = await fetch(`/openAi/chat?msg=${inputValue.value}&user=${user}`)
            let {data,flag,msg} = await response.json();
            show.value = false
            if (msg) return Message.error(msg)
            currentChat.value.user = inputValue.value
            currentChat.value.openAi = data.currentChat
            console.log(currentChat.value.openAi)
            recordList.value.push(currentChat.value)
            currentChat.value = {}
            inputValue.value = null
            scrollToCur()
        } catch(e) {
            console.log(e)
            show.value = false
            Message.error('未知错误')
        }
    }
    const send = () => {
      inputRef.value?.blur()
      if (!inputValue.value || show.value) {
          return
      }
      handleSend()
    }

    const scrollToCur = () => {
        nextTick(()=> {
            document.getElementById(`chat-item-${recordList.value.length - 1}`).scrollIntoView({
                behavior: 'smooth',
                inline: 'nearest',
                block: 'nearest'
            })
        })
    }
    return {
        recordList,
        show,
        send,
        inputValue
    }
}
