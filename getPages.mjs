import glob  from 'fast-glob'
import matter from 'gray-matter'
import fs from 'node:fs/promises'
import removeMd from 'remove-markdown'

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
        const contents = removeMd(excerpt).trim().split(/\r\n|\n|\r/)
        return {
            ...data,
            title: contents[0].replace(/\s{2,}/g, '').trim(),
            path: path.replace(/\.md$/, '.html').replace('./docs/', '/'),
            excerpt: contents.slice(1).join('').replace(/\s{2,}/g, '').trim()
        }
    })
)

await fs.writeFile('./article-data.json', JSON.stringify(articleData), 'utf-8')
