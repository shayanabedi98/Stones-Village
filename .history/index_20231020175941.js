const banner = document.querySelector('.banner');
const bannerImg = ['./resources/aaron-huber-G7sE2S4Lab4-unsplash.jpg', './resources/black-marble-texture2-min2.jpg', './resources/SV.png'];
let bannerImgIndex = 0;
const logoName = document.querySelector('#logo-name');
const logoCube = document.querySelector('#logo-cube');
const navbar = document.querySelector('.navbar');

logoCube.addEventListener('click', () => {
    window.location.replace('./')
})

logoCube.addEventListener('mouseover', () => {
    navbar.style.backgroundColor = 'rgba(224, 183, 57,0.3)'
    navbar.style.transition = '4s'
})

logoCube.addEventListener('mouseout', () => {
    navbar.style.backgroundColor = 'rgba(29, 31, 31, 0.7)'
    navbar.style.transition = '2s'
})

logoName.addEventListener('click', () => {
    window.location.replace('./')
})

logoName.addEventListener('mouseover', () => {
    navbar.style.backgroundColor = 'rgba(224, 183, 57,0.3)'
    navbar.style.transition = '4s'
})

logoName.addEventListener('mouseout', () => {
    navbar.style.backgroundColor = 'rgba(29, 31, 31, 0.7)'
    navbar.style.transition = '2s'
})

const bannerImgChanger = () => {
    banner.style.opacity = '0'
    bannerImgIndex = (bannerImgIndex + 1) % bannerImg.length;
    banner.style.background = `url(${bannerImg[bannerImgIndex]})`;
    
    if (bannerImgIndex === 0) {
        banner.style.backgroundSize = '2100px';
        banner.style.backgroundPosition = '0 -400px'
        banner.style.backgroundAttachment = 'fixed';
        banner.style.opacity = '1'
        banner.style.transition = 'opacity 1s ease-in, background-size 0s, background-position 0s;';
        setTimeout(() => {
            banner.style.opacity = '0'
        }, 7000)

    } else if (bannerImgIndex === 1) {
        banner.style.backgroundSize = '2000px';
        banner.style.backgroundAttachment = 'fixed';
        banner.style.opacity = '1'
        banner.style.transition = 'opacity 1s ease-in, background-size 0s, background-position 0s;';
        setTimeout(() => {
            banner.style.opacity = '0'
        }, 7000)

    } else if (bannerImgIndex === 2) {
        banner.style.backgroundSize = '3650px';
        banner.style.backgroundPosition = '-250px 20px'
        banner.style.backgroundAttachment = 'fixed';
        banner.style.opacity = '1'
        banner.style.transition = 'opacity 1s ease-in, background-size 0s, background-position 0s;';
        setTimeout(() => {
            banner.style.opacity = '0'
        }, 7000)
    }
};

bannerImgChanger();

setInterval(bannerImgChanger, 8000)