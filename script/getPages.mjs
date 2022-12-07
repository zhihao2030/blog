import glob  from 'fast-glob'
import matter from 'gray-matter'
import fs from 'node:fs/promises'
import removeMd from 'remove-markdown'
import moment from 'moment'
moment.locale('zh-cn')

console.log('Start building PageData..')
const articleData = await Promise.all(
    glob.sync('./docs/**/*.md', {
        onlyFiles: true,
        objectMode: true,
        ignore: ['./docs/**/index.md', './docs/**/tags.md', './docs/**/archives.md', './docs/**/me.md', './docs/**/ChatGPT.md'], // without !
    }).map(async (article) => {
        const file = matter.read(`${article.path}`,{
            excerpt: true,
            excerpt_separator: '<!-- more -->'
        })
        const { data, excerpt, path, content } = file
        const formatDate = data.date ? moment(data.date).format('YYYY-MM-DD HH:mm:ss') : 'xxx'
        const contents = removeMd(excerpt).trim().split(/\r\n|\n|\r/)
        return {
            ...data,
            pageInfo:getReadTime(content),
            date: formatDate,
            path: path.replace(/\.md$/, '').replace('./docs/', ''),
            excerpt: contents.slice(1).join('').replace(/\s{2,}/g, '').trim()
        }
    })
)

function sortByTime(posts) {
    return posts.sort((a, b) => b.date && b.date.localeCompare(a.date))
}

function getReadTime(content) {
    let fontNum = content.replace(/\s/g, "").trim().length
    let readTime =Math.round( fontNum / 400);//计算阅读时间(一般，人的阅读速度是300-500字/分钟 ，所以就取了个400，这个值可以根据自己的实际需求来更改)
    return {
        readTime: readTime > 1 ? readTime : 1,
        fontNum
    }
}


await fs.writeFile('article-data.json', JSON.stringify(sortByTime(articleData)), 'utf-8')

console.log('End building PageData..')

