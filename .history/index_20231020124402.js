const banner = document.querySelector('.banner');
const bannerImg = ['./resources/aaron-huber-G7sE2S4Lab4-unsplash.jpg', './resources/black-marble-texture.jpg', './resources/SV.png'];
let bannerImgIndex = 0;
const logoName = document.querySelector('#logo-name');
const logoCube = document.querySelector('#logo-cube');

logoCube.addEventListener('click', () => {
    window.location.replace('index.html')
})

//preload images
const preloadImg = () => {
    bannerImg.forEach((path) => {
        const img = new Image();
        img.src = path;
    });
;}

const bannerImgChanger = () => {
    bannerImgIndex = (bannerImgIndex + 1) % bannerImg.length;
    banner.style.background = `url(${bannerImg[bannerImgIndex]})`;
    
    if (bannerImgIndex === 0) {
        banner.style.backgroundSize = '2100px';
        banner.style.backgroundPosition = '0 -400px'
    } else if (bannerImgIndex === 1) {
        banner.style.backgroundSize = '2000px';
    } else if (bannerImgIndex === 2) {
        banner.style.backgroundSize = '3500px';
        banner.style.backgroundPosition = '-200px 150px'
    }
}

setInterval(bannerImgChanger, 5000)