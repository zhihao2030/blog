import {ref} from "vue";
import {getCookie} from "../../utils";
import myRequest from "../../api";
export default function useSendComment(list) {
    const comment = ref('')
    const username = getCookie('webPoint')

    // clear
    const handleClear = (v) => {
        if (v) {
            v.inputValue = ''
            v.reply = false
        } else {
            comment.value = ''
        }
    }

    const handleAddComment = (row,data) => {
        if (!row) {
            list.value.unshift(data)
        }
    }

    const sendComment = async (row) => {
        const inputValue = row ? row.inputValue  : comment.value
        const {_id} = row || {}
        if (!inputValue) {
            return
        }
        const params = {
            username,
            id:_id,
            comment: inputValue
        }
        const {data,code,msg} = await myRequest(`/comment`,{
            method: 'post',
            body: JSON.stringify(params),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (code === 200) {
            handleAddComment(row,data)
            handleClear(row)
        } else {

        }
    }
    return {
        comment,
        sendComment,
        handleClear
    }
}
