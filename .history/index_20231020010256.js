let banner = document.querySelector('.banner');
let bannerImg = ['./resources/aaron-huber-G7sE2S4Lab4-unsplash.jpg', './resources/marble-2398956_1920.jpg', './resources/SV.png']

for (let i = 0; i <= bannerImg.length; i++) {
    banner.styles.background = url(bannerImg[i])
}