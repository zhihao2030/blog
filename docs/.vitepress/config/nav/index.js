const navConfig =  [
    { text: '首页', link: '/'},
    { text: '记录总结', link: '/summary/',activeMatch: '/summary/' },
    { text: 'Javascript', link: '/javascript/' ,activeMatch: '/javascript/'},
    { text: '网络协议', link: '/network-protocol/',activeMatch: '/network-protocol/' },
    { text: '工程化', link: '/devops/' ,activeMatch: '/devops/'},
    { text: '浏览器', link: '/browser/' ,activeMatch: '/browser/'},
    // { text: '算法', link: '/algorithm/' ,activeMatch: '/algorithm/'},
    // { text: 'React', link: '/react/' ,activeMatch: '/react/'},
    {
        text: '分类',
        link: '/tags',
        activeMatch: '/tags'
    },
    {
        text: '归档',
        link: '/archives',
        activeMatch: '/archives'
    },
]

export default navConfig
