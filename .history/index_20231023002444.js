const banner = document.querySelector('.banner');
const bannerImg = ['./resources/aaron-huber-G7sE2S4Lab4-unsplash.jpg', './resources/black-marble-texture2-min2.jpg', './resources/engin-akyurt-m555vEfryhE-unsplash.jpg', './resources/marble-2398956_1920.jpg'];
let bannerImgIndex = 0;
const logoName = document.querySelector('#logo-name');
const logoCube = document.querySelector('#logo-cube');
const navbar = document.querySelector('.navbar');
const instagram = document.querySelector('#example-instagram');
const contact = document.querySelector('#example-contact')
const inputName = document.querySelector('#input-name');
const inputEmail = document.querySelector('#input-email');
const inputMsg = document.querySelector('#input-msg');

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
        banner.style.backgroundAttachment = 'fixed';
        banner.style.opacity = '1'
        banner.style.transition = 'opacity 1s ease-in, background-size 0s, background-position 0s;';
        setTimeout(() => {
            banner.style.opacity = '0'
        }, 7000)
    } else if (bannerImgIndex === 3) {
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

instagram.addEventListener('click', () => {
    window.open('https://www.instagram.com/stonesvillage/', '_blank')
})

contact.addEventListener('click', () => {
    window.location.replace('./contact')
})

document.querySelector('contact-form button').addEventListener('click', () => {

        alert("Thank you for message. We will get back to you within 2 business days.")
    
})