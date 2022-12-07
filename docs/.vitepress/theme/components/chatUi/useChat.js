import {ref} from "vue";
import { Message } from '@arco-design/web-vue';

export default function useChat() {
    const recordList = ref([])
    const inputValue = ref(null)
    const show = ref(false)
    const currentChat = ref({})

    const handleSend = async () => {
        show.value = true
        try {
           const response = await fetch(`/openAi/chat?msg=${inputValue.value}`)
            let {data,flag,msg} = await response.json();
            show.value = false
            if (msg) return Message.error(msg)
            currentChat.value.user = inputValue.value
            currentChat.value.openAi = data.currentChat
            recordList.value.push(currentChat.value)
            currentChat.value = {}
        } catch(e) {
            show.value = false
            Message.error('未知错误')
        }
    }
    const send = () => {
      if (!inputValue.value || show.value) {
          return
      }
      handleSend()
    }
    return {
        recordList,
        show,
        send,
        inputValue
    }
}
