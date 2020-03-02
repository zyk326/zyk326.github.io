// 获取前进和后退按钮
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
// 获取.slide下的所有div
const slides = document.querySelectorAll(".slide");
// 设置第一张图片的数组下标为0
var currentIndex = 0;
// 点击#next按钮时调用handleNextClicked函数
next.addEventListener("click", handleNextClicked);
// 给next按钮添加事件
function handleNextClicked() {
    // 定义一个current变量保存当前幻灯片
    let current = slides[currentIndex];
    // 去掉current的opacity="1"的class属性,让它不显示为第一张
    current.classList.remove("current");
    // 移动currentIndex到下一张幻灯片
    currentIndex++;
    // 如果运动到了末尾，那么让currentIndex从第一张开始播放
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    // 然后给新的currentIndex加上current属性
    slides[currentIndex].classList.add("current");
}
prev.addEventListener("click", handlePrevClicked);

function handlePrevClicked() {
    let current = slides[currentIndex];
    current.classList.remove("current");
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    slides[currentIndex].classList.add("current");
}
// 定义是否自动播放
var autoPlay = true;
// 播放方向
var forward = true;
// 播放间隔
var interval = 5000;
// 如果是自动播放，利用setInterval接收两个参数。如果是向前进，调用handlePrevClicked，如果是后退，调用handleNextClicked，间隔5s。
if (autoPlay) {
    setInterval(forward ? handlePrevClicked : handlePrevClicked, interval)
}