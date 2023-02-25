import {ref} from 'vue'
import {getCookie} from "../utils";
export default function useGptComment() {
    const username = getCookie('webPoint')

    const list = ref([{"user":111,"comment":3333,"id":1,"pid":null,children: [{"user":222,"comment":3333,"id":3,"pid":1}]},{"user":222,"comment":3333,"id":13,"pid":null,children: [{"user":222,"comment":3333,"id":32,"pid":1}]}])

    const sendComment = async (id) => {
        const params = {
            username,
            id,
        }
        const response = await fetch(`/openAi/comment`,{
            method: 'post',
            body: JSON.stringify(params),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        let {data,code,msg} = await response.json();
    }
    return {
        sendComment,
        list
    }
}
