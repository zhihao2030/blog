import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig({
    plugins: [
        //SearchPlugin({
        //encode: false,
        //tokenize: 'full'
        //}),
        Components({
            dirs: ['.vitepress/theme/components'],
            deep: true,
            include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
                resolvers: [AntDesignVueResolver()]
        })
    ],
    ssr: { noExternal: ['ant-design-vue','@ant-design/icons-vue'] }
})
