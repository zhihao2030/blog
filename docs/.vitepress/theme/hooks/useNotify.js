import myRequest from "../api";
import {Notification} from "@arco-design/web-vue";
import {onMounted} from "vue";

export default function useNotify() {
    let notify = null

    const handleMessage =async () =>{
        try {
            // type: notify, isactive: true, msgType: 'info', content: ''
            const {code, data} =await myRequest(`/config?type=notify`)
            if(code === 200) {
                let {isActive, content, msgType, title, duration, position} = data[0]
                isActive && showNotify(content, msgType, title, duration, position)
            }
        }catch (e) {}
    }
    const showNotify = (content, msgType='info', title, duration, position) => {
        notify = Notification[msgType]({
            title,
            content,
            position,
            duration,
            closable: true
        })
    }

    const cloneNotify = () => {
        notify && notify.close()
        notify = null
    }

    return {
        handleMessage,
        cloneNotify
    }
}