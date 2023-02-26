import {ref, watch} from 'vue'
import {getCookie} from "../../utils";
import myRequest from "../../api";
import {cloneDeep, isEmpty} from "lodash-es";

export default function useComment(props) {
    const username = getCookie('webPoint')

    const list = ref([])
    const sendComment = async (id) => {
        const params = {
            username,
            id,
        }
        const response = await myRequest(`/openAi/comment`,{
            method: 'post',
            body: JSON.stringify(params),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        let {data,code,msg} = await response.json();
    }

    const handleResolveData = (data) => {
        return cloneDeep(data).map(v=>{
            v.reply = false
            v.inputValue = ''
            return v
        })
    }

    watch(()=>props.commentList, (v)=>{
        if (!isEmpty(v)) {
            list.value = handleResolveData(v)
        }
    },{immediate:true,deep:true})
    return {
        sendComment,
        list
    }
}
