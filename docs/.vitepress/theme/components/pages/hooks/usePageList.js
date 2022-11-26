import {reactive, ref, shallowRef, watchEffect,nextTick} from "vue";
import {useInstance} from '../../../helpers/composable'



export default function usePageList() {

    const pageDataAll = ref([])

    const pageData = ref([])

    const instance = useInstance()

    const pagination = reactive({
        current: 1,
        total: 0,
        pageSize: 10,
        pageTotal: 0,
    })

    const toTop = () => {
        // window.scrollTo({
        //     top: 0,
        //     behavior: "smooth"
        // });
    }

    // 监听总数量
    watchEffect(()=>{
        if (instance) {
            pageDataAll.value = JSON.parse(instance.$pages)
            pagination.total = pageDataAll.value.length
            pagination.pageTotal = Math.ceil(pagination.total / pagination.pageSize);
        }

    })
    const pageChange = (current=1, pageSize=10) => {
        pagination.current = current
        pagination.pageSize = pageSize
        pageData.value = current >= pagination.pageTotal ? pageDataAll.value.slice((pagination.current - 1) * pageSize, pagination.total)
                            : pageDataAll.value.slice((current - 1) * pageSize, current * pageSize)
        nextTick(()=>toTop())
    };

    return {
        pageData,
        instance,
        pagination,
        pageChange
    }
}
