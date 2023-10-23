const banner = document.querySelector('.banner');
const bannerImg = ['./resources/aaron-huber-G7sE2S4Lab4-unsplash.jpg', './resources/black-marble-texture2-min2.jpg', './resources/SV.png'];
let bannerImgIndex = 0;
const logoName = document.querySelector('#logo-name');
const logoCube = document.querySelector('#logo-cube');
const navbar = document.querySelector('.navbar');

logoCube.addEventListener('click', () => {
    window.location.replace('index.html')
})

logoCube.addEventListener('mouseover', () => {
    navbar.style.backgroundColor = 'rgba(224, 183, 57,0.3)'
    navbar.style.transition = '2s'
})

logoName.addEventListener('click', () => {
    window.location.replace('index.html')
})

logoName.addEventListener('mouseover', () => {
    navbar.style.backgroundColor = 'rgba(224, 183, 57,0.3)'
    navbar.style.transition = '2s'
})

!logoCube.addEventListener('mouseover', () => {
    navbar.style.backgroundColor = 'rgba(29, 31, 31, 0.7)'
    navbar.style.transition = '2s'
})

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
};

setInterval(bannerImgChanger, 7000)