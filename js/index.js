let index = new Vue({
    el : '.index',
    
    data : {
        toolsAB : '',
        toolsImg : '',
        updataInfo : [{
            date : '2021/04/02',
            tag : '添加index.html，添加‘登录页面’，将项目部署到github上。'
        },{
            date : '2021/04/03',
            tag : '添加了‘注册页面’，优化移动端显示。'
        },{
            date : '2021/04/05',
            tag : '添加小工具，index page简单排版。'
        }],
        toolsSrc : [{
            name : 'count',
            src : 'https://www.baidu.com',
            img : ''
        },{
            name : 'notebook',
            src : '',
            img : ''
        },{
            name : 'photoView',
            src : '',
            img : ''
        }]
    },
    methods : {
        go :function(e){
            console.log(e)
            window.open.href(this.toolsSrc[e].src)
            
            console.log( window.open.href(this.toolsSrc[e].src) )
        }
    }
})