let index = new Vue({
    el: '.index',

    data: {
        downloadSRC: '',
        updataInfo: [{
            date: '2021/04/02',
            tag: '添加index.html，添加‘登录页面’，将项目部署到github上。'
        }, {
            date: '2021/04/03',
            tag: '添加了‘注册页面’，优化移动端显示。'
        }, {
            date: '2021/04/05',
            tag: '添加小工具，index page简单排版。'
        }, {
            date: '2021/04/06',
            tag: '重排index.html结构。'
        }, {
            date: '2021/04/10',
            tag: 'index排版，今天没去图书馆，罪恶感爆棚！！！'
        }],
    },
    methods: {
        go: function (e) {
            console.log(e)
            window.open.href(this.toolsSrc[e].src)
            console.log(window.open.href(this.toolsSrc[e].src))
        },
        downloadPC: function () {
            // 当前
            // window.location.href = "https://www.baidu.com"            // 新开
            // 新开 
            window.open("https://www.baidu.com")
        },
        downloadIPHONE: function () {
            window.location.href = "https://www.baidu.com"
        },
        downloadANDROID: function () {
            window.location.href = "https://www.baidu.com"
        }
    }
})