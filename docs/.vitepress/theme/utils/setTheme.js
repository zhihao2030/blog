export default function setTheme() {
    const scheme = window.matchMedia('(prefers-color-scheme: dark)')
    if (scheme.matches) {
        // 深色模式业务处理代码
        console.log('深色模式');
        document.body.setAttribute('arco-theme', 'dark')
        document.documentElement.classList.add("dark")
    } else {
        // 浅色模式业务处理代码
        console.log('浅色模式');
        document.body.documentElement('arco-theme');
        document.documentElement.classList.add("dark")
    }
}
