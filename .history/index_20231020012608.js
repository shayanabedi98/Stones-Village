const banner = document.querySelector('.banner');
const bannerImg = ['./resources/aaron-huber-G7sE2S4Lab4-unsplash.jpg', './resources/marble-2398956_1920.jpg', './resources/SV.png']
let bannerImgIndex = 0

function bannerImgChanger() {
    bannerImgIndex = (bannerImgIndex + 1) % bannerImg.length
    banner.style.background = `url(${bannerImg[bannerImgIndex]})`;
}

setInterval(bannerImgChanger, 5000)