// @ts-ignore
import data from '../../../article-data.json'
import Theme from 'vitepress/theme'
import myLayout from './myLayout.vue'
import registerPlugin from './plugin'
import { initTags } from './helpers/other'

export default {
    ...Theme,
    Layout: myLayout,
    enhanceApp({app,router}) {
        registerPlugin(app)
        app.config.globalProperties.$pages = JSON.stringify(data)
        app.config.globalProperties.$tags = JSON.stringify(initTags(data))
        app.config.globalProperties.$router = router
    }
}
