import {nextTick, ref} from "vue";
import { Message } from '@arco-design/web-vue';

export default function useChat() {
    const recordList = ref([])
    const inputValue = ref(null)
    const show = ref(false)
    const currentChat = ref({})
    const inputRef = ref(null)
    const handleSend = async () => {
        show.value = true
        try {
           const response = await fetch(`/openAi/chat?msg=${inputValue.value}`)
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
