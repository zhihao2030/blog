import {getQueryParam} from '../../helpers/utils'
import { onMounted, ref, watch} from "vue";
import { useInstance } from '../../helpers/composable'
import { getOneColor } from '../../helpers/other'

export default function useArchive() {
    const instance = useInstance()

    const tagList = JSON.parse(instance.$tags)
    console.log(JSON.parse(instance.$pages))
    const resolvedBlogsLength = ref([])

    const resolvedBlogsNum = ref([])

    const archiveObj = ref({})

    const archiveList = ref([])

    const a = ref([])

    console.log(tagList, 'tagList')

    const handleBlogs = (tagList) => {
        for (const [key, value] of Object.entries(tagList)) {
            resolvedBlogsLength.value.push(value.length)
            resolvedBlogsNum.value = resolvedBlogsLength.value.reduce(reducer)
            for (let i = 0; i < value.length; i++) {
                const article = value[i]
                let year = (new Date(article.date).getFullYear()) + '年'
                let month = (new Date(article.date).getMonth() + 1) + '月'

                if (!archiveObj.value[year]) {
                    archiveObj.value[year] = {}
                }
                if (!(archiveObj.value[year][month])) {
                    archiveObj.value[year][month] = []
                }
                archiveObj.value[year][month].push(article)
            }
            console.log(archiveObj.value, 'aaaa')
        }
    }

    const reducer = (a, b)=>{
        return a+b
    }

    const init = () => {
        handleBlogs(tagList)
    }

    onMounted(()=>{
        init()
    })

    return {
        resolvedBlogsNum,
        archiveObj
    }
}
