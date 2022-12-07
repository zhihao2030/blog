const navConfig =  [
    { text: '首页', link: '/'},
    {
        text: 'ChatGPT',
        link: '/ChatGPT',
        activeMatch: '/ChatGPT'
    },
    {
        text: '笔记',
        items: [
            { text: 'Vue.js设计与实现', link: '/note/vueDesign/框架设计概览/01.权衡的艺术', activeMatch: '/note/vueDesign/' },
            // { text: 'Vue', link: '/note/vue/index', activeMatch: '/note/vue/' },
            // { text: 'React', link: '/note/react/index', activeMatch: '/note/react/' },
        ],
        activeMatch: '/note/'
    },
    { text: '记录总结', link: '/summary/',activeMatch: '/summary/' },
    { text: 'Javascript', link: '/javascript/' ,activeMatch: '/javascript/'},
    { text: '杂项', link: '/devops/' ,activeMatch: '/devops/'},
    {
        text: '标签',
        link: '/tags',
        activeMatch: '/tags'
    },
]

export default navConfig
