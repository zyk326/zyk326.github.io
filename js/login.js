let app = new Vue({
    el: '.content',
    data: {
        // 各项placeholder
        username : 'Email or Phone',
        password : 'PassWord',
        visibleInfo : 'Show',
        //密码input type属性
        wordtype : 'password',
        isClass : '',
        comPhone : false,
        comEmail : false,
        comCode : false,
        User : '',
        Code : '',
        // 登录成功跳转地址
        loginFormUrl : ''
    },
    methods: {
        // 用户名input获得焦点
        focusUser: function () {
            this.username = ''
        },
        //用户名input正则判断
        blurUser: function () {
            this.username = 'Email or Phone';
            let regPhone = /^1[3|4|5|7|8]\d{9}$/;
            let regEmail = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
            this.testPhone(regPhone);
            this.testEmail(regEmail);
        },
        //验证是否正手机号
        testPhone:function(reg){
            if(reg.test(this.User)){
                this.comPhone = true 
            }else{
               this.comPhone = false 
            }
        },
        //验证是否正Email
        testEmail:function(reg){
            if(reg.test(this.User)){
                this.comEmail = true 
            }else{
               this.comEmail = false 
            }
        },
        //密码input获得焦点
        focusPwd: function () {
            this.password = ''
        },
        //密码input正则判断
        blurPwd: function () {
            this.password = 'PassWord';
            // 密码包含 数字,英文,字符中的两种以上，长度6-20
            let regCode = /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{6,20}$/;
            this.testPwd(regCode);
        },
        testPwd : function(reg){
            if(reg.test(this.Code)){
                this.comCode = true
            }else{
                this.comCode = false
            }
        },
        //login按钮逻辑判断通过
        submitThis:function(){
            console.log('手机号？' + this.comPhone)
            console.log('邮箱？' + this.comEmail)
            console.log('密码？' + this.comCode)
            if((this.comPhone||this.comEmail)&&this.comCode){
                console.log("yes")
                this.loginFormUrl = 'https://www.baidu.com'
            }else{
                console.log('no')
                this.loginFormUrl = '#'
            }
        },
        //密码input显示与隐藏
        show: function () {
            if (this.wordtype === 'text') {
                this.wordtype = 'password'
                this.visibleInfo = 'Show'
            } else if (this.wordtype === 'password') {
                this.wordtype = 'text'
                this.visibleInfo = 'Hide'
            }
        }
        // addAni:function(){
        //     this.isClass = 'ani'
        // },
        // delAni:function(){
        //     this.isClass = ''

        // }

    }
})