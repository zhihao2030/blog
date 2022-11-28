const headConfig = [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['script', {async: true, src:'https://www.googletagmanager.com/gtag/js?id=G-4H800SD2DB'}],
    ['script', { src:'/google/analytics.js'}],
    ['script', {}, `var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?8e71fc6c2a4d00b06ee5c2c294e7d573";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();`]
]
export default headConfig
