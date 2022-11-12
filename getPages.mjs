import glob  from 'fast-glob'
import matter from 'gray-matter'
import fs from 'node:fs/promises'
import removeMd from 'remove-markdown'
import moment from 'moment'
moment.locale('zh-cn')

const articleData = await Promise.all(
    glob.sync('./docs/**/*.md', {
        onlyFiles: true,
        objectMode: true,
        ignore: ['./docs/**/index.md', './docs/**/tags.md', './docs/**/archives.md', './docs/**/me.md'], // without !
    }).map(async (article) => {
        const file = matter.read(`${article.path}`,{
            excerpt: true,
            excerpt_separator: '<!-- more -->'
        })
        const { data, excerpt, path } = file
        console.log(file)
        const formatDate = data.date ? moment(data.date).format('YYYY-MM-DD HH:mm:ss') : 'xxx'
        const contents = removeMd(excerpt).trim().split(/\r\n|\n|\r/)
        return {
            ...data,
            date: formatDate,
            path: path.replace(/\.md$/, '.html').replace('./docs/', '/'),
            excerpt: contents.slice(1).join('').replace(/\s{2,}/g, '').trim()
        }
    })
)

function sortByTime(posts) {
    return posts.sort((a, b) => b.date && b.date.localeCompare(a.date))
}

await fs.writeFile('./article-data.json', JSON.stringify(sortByTime(articleData)), 'utf-8')
