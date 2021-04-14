// <!-- 接口地址：https://autumnfish.cn/search -->
// https://autumnfish.cn/song/url
// https://autumnfish.cn/song/detail
// https://autumnfish.cn/comment/hot?type=0
// https://autumnfish.cn/mv/url?id=
let musicPlayer = new Vue({
    el: '.musicPlayer',
    data: {
        // 搜索关键字
        keyword: '',
        // 有关关键字的信息
        getinfoli: '',
        // 音乐链接
        musicurl: '',
        // 演唱者
        artist: '',
        // 歌曲封面
        picture: '',
        // 唱片属性
        isstyle: '',
        // 评论数据
        comInfo: '',
        isplay: false,
        mvUrl: '',
        flagMv: false,
    },
    methods: {
        searchinfo: function () {
            let that = this;
            axios.get("https://autumnfish.cn/search?keywords=" + this.keyword)
                .then(function (response) {
                    that.getinfoli = response.data.result.songs;
                    console.log(that.getinfoli)
                }, function (err) {

                })
        },
        playmusic: function (e) {
            let that = this;
            axios.get("https://autumnfish.cn/song/url?id=" + this.getinfoli[e].id)
                .then(function (response) {
                    console.log(response)
                    that.musicurl = response.data.data[0].url;
                    // that.picture = response
                }, function (err) {

                })
            axios.get("https://autumnfish.cn/song/detail?ids=" + this.getinfoli[e].id)
                .then(function (response) {
                    console.log(response)
                    that.picture = response.data.songs[0].al.picUrl;
                }, function (err) {

                })
            axios.get("https://autumnfish.cn/comment/hot?type=0&id=" + this.getinfoli[e].id)
                .then(function (response) {
                    console.log(response)
                    that.comInfo = response.data.hotComments;
                }, function (err) {

                })
        },
        overTitle: function (e) {
            this.artist = this.getinfoli[e].artists[0].name;
        },
        play: function () {
            this.isplay = true;
            console.log(this.isplay)
        },
        pause: function () {
            this.isplay = false;
            console.log(this.isplay)
        },
        playMv: function (e) {
            var audio = document.getElementById('audio');
            audio.pause();
            let that = this;
            axios.get("https://autumnfish.cn/mv/url?id=" + e)
                .then(function (response) {
                    // console.log(response.data.data.url)
                    that.mvUrl = response.data.data.url;
                    that.flagMv = true;
                }, function (err) {

                })
        },
        hideMv: function () {
            this.flagMv = false;
        }
    }
})