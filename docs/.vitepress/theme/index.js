import data from '../../../article-data.json'
import Theme from 'vitepress/theme'
import myLayout from './myLayout.vue'
import registerPlugin from './plugin'
import { initTags,filterReadInfo } from './helpers/other'
import './styles/commom.css'
import './styles/reset.scss'
import setupStore from './store'
import { useReadInfoOut } from './store/modules/readInfo'
import setMd from './plugin/md'

export default {
    ...Theme,
    Layout: myLayout,
    enhanceApp({app,router}) {
        setMd(app)
        setupStore(app)
        app.config.globalProperties.$pages = JSON.stringify(data)
        app.config.globalProperties.$tags = JSON.stringify(initTags(data))
        app.config.globalProperties.$router = router

        const readInfoOut = useReadInfoOut()
        readInfoOut.setReadInfoList(filterReadInfo(data))
    }
}
