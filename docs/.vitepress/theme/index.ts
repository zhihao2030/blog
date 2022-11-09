// @ts-ignore
import data from '../../../article-data.json'
import Theme from 'vitepress/theme'
import test from './test.vue'
import theme from "vitepress/theme";
export default {
    ...Theme,
    enhanceApp({app}) {
        console.log(app)
        console.log(data)
        app.component('test',test)
        app.config.globalProperties.$pages = JSON.stringify(data)
        app.config.globalProperties.$tags = JSON.stringify(initTags(data))
        console.log(app)
        //interceptRouterError(router)
        //fixRouterError404(router)
    }
}

function initTags(articleData) {
    const tags =  {}
    for (let i = 0; i < articleData.length; i++) {
        const article = articleData[i]
        const articleTags = article.tags
        if (Array.isArray(articleTags)) {
            articleTags.forEach((articleTag) => {
                if (!tags[articleTag]) {
                    tags[articleTag] = []
                }
                tags[articleTag].push(article)
                // 文章按发布时间降序排序
                console.log(tags[articleTag])
                tags[articleTag].sort((a, b) => b.date && b.date.localeCompare(a.date))
            })
        }
    }
    return tags
}
