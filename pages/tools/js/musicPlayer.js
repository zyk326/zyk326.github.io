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
        getinfoli: [{
            "id": 108428,
            "name": "爱不会绝迹",
            "artists": [
                {
                    "name": "林俊杰",
                }
            ],
            "mvid": 5501557,

        }],
        songinfo: [
            {
                "data": {
                    "data": [
                        {
                            "url": "http://m8.music.126.net/20210418195349/a59ed4f79e7b86be61e702081f03d20b/ymusic/ts/free/bf52b82d46ab06766919fde4f7aa8666.mp3",
                        }
                    ],
                },
            }
        ],
        pocinfo: [{
            "data": {
                "songs": [
                    {
                        "al": {
                            "picUrl": "https://p2.music.126.net/rCKv3f3MgBkZ1aY1eHYn8A==/109951165628175250.jpg",
                        },
                    }
                ]
            }
        }],
        cominfo: [],
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
        //  各板块显示
        flagsongLis: false,
        flagwords: true,
        flagcomments: true,
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
                    // console.log(response)
                    that.songinfo = response;
                    that.musicurl = that.songinfo.data.data[0].url;
                }, function (err) {

                })
            axios.get("https://autumnfish.cn/song/detail?ids=" + this.getinfoli[e].id)
                .then(function (response) {
                    // console.log(response)
                    that.pocinfo = response;
                    that.picture = that.pocinfo.data.songs[0].al.picUrl;
                    console.log('45454545' + that.pocinfo.data.songs[0].al.picUrl)
                }, function (err) {

                })
            axios.get("https://autumnfish.cn/comment/hot?type=0&id=" + this.getinfoli[e].id)
                .then(function (response) {
                    // console.log(response)
                    that.cominfo = response
                    that.comInfo = that.cominfo.data.hotComments;
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
                    console.log(response.data.data.url)
                    that.mvUrl = response.data.data.url;
                    that.flagMv = true;
                }, function (err) {

                })
        },
        hideMv: function () {
            this.flagMv = false;
        },
        songLis: function () {
            this.flagsongLis = false;
            this.flagwords = true;
            this.flagcomments = true;
        },
        words: function () {
            this.flagsongLis = true;
            this.flagwords = false;
            this.flagcomments = true;
        },
        comments: function () {
            this.flagsongLis = true;
            this.flagwords = true;
            this.flagcomments = false;
        }
    }
})