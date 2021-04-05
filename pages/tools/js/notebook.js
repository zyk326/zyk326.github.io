let app = new Vue({
    el : '.notebook',
    data : {
        tagInfo : ['点我上面输入','考研去了，没时间优化'],
        message : '',
        addmes : '',
    },
    methods : {
        submit : function(){
                if(this.message!=''){
                    this.tagInfo.push(this.message);
                }
            this.message = ''
        },
        clearAll : function(){
            this.tagInfo = [];
        },
        thisDel : function(e){
            this.tagInfo.splice(e,1)
        }
    }
})