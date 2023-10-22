const banner = document.querySelector('.banner');
const bannerImg = ['./resources/aaron-huber-G7sE2S4Lab4-unsplash.jpg', './resources/marble-2398956_1920.jpg', './resources/SV.png']
let bannerImgIndex = 0

function bannerImgChanger() {
    bannerImgIndex = (bannerImgIndex + 1) % bannerImg.length;
    banner.style.background = `url(${bannerImg[bannerImgIndex]})`;
    
    if (bannerImgIndex === 0) {
        banner.style.backgroundSize = '2100px';
        banner.style.backgroundPosition = '0 -400px'
    } else if (bannerImgIndex === 1) {
        banner.style.backgroundSize = '3000px';
        banner.style.backgroundPosition = '0 -400px'
    } else if (bannerImgIndex === 2) {
        banner.style.backgroundSize = '4000px';
    }
}

setInterval(bannerImgChanger, 5000)