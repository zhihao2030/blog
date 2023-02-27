import {onMounted, ref} from 'vue'
import myRequest from "../../api";
import {generateTree} from "../../utils";

export default function useGptComment() {

    const list = ref([])

    const getCommentList = async () => {

        const {data,code,msg} = await myRequest(`/comments`)

        if (code === 200) {
           list.value = generateTree(data).filter(v=>v.display)
        }
    }
onMounted(getCommentList)
    return {
        list
    }
}
