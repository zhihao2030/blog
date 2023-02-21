import MarkdownIt from 'markdown-it'
import hljs from 'highlightjs'
import 'highlightjs/styles/darcula.css'
import {watch,ref} from "vue"

export default function useRenderMd(props) {
    const md = new MarkdownIt({
        highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return '<pre class="hljs"><code>' +
                        hljs.highlight(lang, str, true).value +
                        '</code></pre>';
                } catch (__) {}
            }

            return '<pre class="hljs"><code>' +md.utils.escapeHtml(str) + '</code></pre>';
        }
    })
    const res = ref('')
    const handleRenderMd = (content) => {
      return md.render(content)
    }

    watch(()=>props.content,(content)=>{
        res.value = handleRenderMd(content)
    },{immediate:true})

    return {
        res
    }
}
