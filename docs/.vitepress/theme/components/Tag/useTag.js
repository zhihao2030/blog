import {getQueryParam} from '../../helpers/utils'
import { onMounted, ref, watch} from "vue";
import { useInstance } from '../../helpers/composable'
import { getOneColor } from '../../helpers/other'

export default function useTag() {
    const instance = useInstance()

    const tagList = JSON.parse(instance.$tags)

    const blogsList = ref([])

    const resolvedTagList = ref([])

    const currentTag = ref('')

    const getCurrentTag = () => {
        currentTag.value = getQueryParam('key') || '全部'
    }

    const handleSelectTag = ({tagName}) => {
        if (tagName === currentTag.value) return
        currentTag.value = tagName
    }

    const handleBlogs = () => {
        const tagItem = resolvedTagList.value.find(tag=>{
            return tag.tagName === currentTag.value
        })
        blogsList.value = tagItem.blogs || []
    }

    const handleTags = (tagList) => {
        for (const [key, value] of Object.entries(tagList)) {
            const tag = {
                tagName: key,
                blogs: value,
                color: getOneColor(),
                num: (value || []).length
            }
            resolvedTagList.value.push(tag)
        }
        resolvedTagList.value.unshift({tagName: '全部',blogs: JSON.parse(instance.$pages),color: getOneColor()})
    }

    const init = () => {
        getCurrentTag()
        handleTags(tagList)
    }

    onMounted(()=>{
        init()
    })

    watch(()=>currentTag.value,(tag)=>{
        if (tag) handleBlogs()
    })

    return {
        currentTag,
        handleSelectTag,
        tagList,
        resolvedTagList,
        blogsList
    }
}
