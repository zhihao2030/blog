import {useRoute,useData} from "vitepress";
import {nextTick, onMounted, watch} from "vue";
import '../helpers/medium-zoom.min.js'

export default function useMediumZoom () {
    const {theme} = useData()
    const openMediumZoom = theme.value.selfPlugin.mediumZoom
    if(!openMediumZoom) return
    const route = useRoute()
    watch(()=>route.path,()=>{
        nextTick(()=>{
            mediumZoom('[data-zoomable]', {
                margin: 24,
                background: 'rgba(25, 18, 25, 0.9)',
                scrollOffset: 0
            })
        })
    })

    onMounted(()=>{
        console.log(444)
        mediumZoom('[data-zoomable]', {
            margin: 24,
            background: 'rgba(25, 18, 25, 0.9)',
            scrollOffset: 0
        })
    })
}
