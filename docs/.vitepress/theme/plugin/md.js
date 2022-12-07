import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';

import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index';
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index';
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css';
import createEmojiPlugin from '@kangc/v-md-editor/lib/plugins/emoji/index';
import '@kangc/v-md-editor/lib/plugins/emoji/emoji.css';
import 'highlight.js/styles/a11y-dark.css' // 导入代码高亮样式
VMdPreview.use(vuepressTheme);
// markdown支持显示代码行数
VMdPreview.use(createLineNumbertPlugin())
// markdown支持代码快速复制
VMdPreview.use(createCopyCodePlugin());
// markdown支持emoji
VMdPreview.use(createEmojiPlugin());
export default function setMd(app) {
    app.use(VMdPreview)
}

