const markdownConfig = {
    // 所有主题参见: https://github.com/shikijs/shiki/blob/main/docs/themes.md
    theme: {
        light: 'material-palenight',
        dark: 'one-dark-pro'
    },
    // lineNumbers: true, // 启用行号

    // 在所有文档的<h1>标签后添加<ArticleMetadata/>组件
    config: (md) => {
        md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
            // @ts-ignore
            let htmlResult = slf.renderToken(tokens, idx, options, env, slf)
            if (tokens[idx].tag === 'h1') htmlResult += `\n<ClientOnly><ArticleInfo v-if="($frontmatter?.aside ?? true) && ($frontmatter?.showArticleMetadata ?? true)" :article="$frontmatter" /></ClientOnly>`
            return htmlResult
        }
        md.renderer.rules.image = (tokens, idx, options, env, slf) => {
            // @ts-ignore
            let htmlResult = slf.renderToken(tokens, idx, options, env, slf)
            return htmlResult.replace('>', ' data-zoomable>');
        }
    }
}
export default markdownConfig
