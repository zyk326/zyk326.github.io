let app = new Vue({
    el: '.bg-img',
    data: {
        // block换行 float不换行
        isstyleUser: false,
        isstyleEmail: false,
        isstylePwd: false,
        unisstyleUser: false,
        unisstyleEmail: false,
        unisstylePwd: false,
        username: '',
        // 各input flag
        comUser: false,
        comEmail: false,
        comPwd: false,
        valueUser: '',
        valueEmail: '',
        valuePwd: '',
        regUsername: /^[a-zA-Z0-9_-]{4,16}$/,
        regEmail: /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/,
        regPwd: /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{6,20}$/,
        signsuc: '#'
    },
    methods: {
        // 各input获得焦点
        userFocus : function(){
            this.userReg();
        },
        emailFocus : function(){
            this.emailReg()
        },
        pwdFocus : function(){
            this.pwdReg()
        },
        // 用户名失去焦点
        userBlur: function () {
            this.userReg();
        },
        // 邮箱失去焦点
        emailBlur: function () {
            this.emailReg()
        },
        // 密码失去焦点
        pwdBlur: function () {
            this.pwdReg()
        },
        //各input测试正则
        userReg: function () {
            if (this.regUsername.test(this.valueUser)) {
                this.comUser = true
                this.isstyleUser = true
                this.unisstyleUser = false
            } else {
                this.comUser = false
                this.isstyleUser = false
                this.unisstyleUser = true
            }
        },
        emailReg: function () {
            if (this.regEmail.test(this.valueEmail)) {
                this.comEmail = true
                this.isstyleEmail = true
                this.unisstyleEmail = false
            } else {
                this.comEmail = false
                this.isstyleEmail = false
                this.unisstyleEmail = true
            }
        },
        pwdReg: function () {
            if (this.regPwd.test(this.valuePwd)) {
                this.comPwd = true
                this.isstylePwd = true
                this.unisstylePwd = false
            } else {
                this.comPwd = false
                this.isstylePwd = false
                this.unisstylePwd = true
            }
        },
        // 提交按钮被点击
        submit: function () {
            console.log(this.comUser, this.comEmail, this.comPwd)
            if (this.comUser && this.comEmail && this.comPwd) {
                this.signsuc = 'https://www.baidu.com'
            } else {
                this.signsuc = '#'
            }
        }
    }
})