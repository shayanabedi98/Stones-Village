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

function bannerImgChanger() {
    banner.style.opacity = 0; // Set opacity to 0 for fade-out
    setTimeout(() => {
        bannerImgIndex = (bannerImgIndex + 1) % bannerImg.length;
        const imageUrl = `url(${bannerImg[bannerImgIndex]})`;

        // Change the background image
        banner.style.backgroundImage = imageUrl;

        setTimeout(() => {
            banner.style.opacity = 1; // Set opacity to 1 for fade-in
        }, 100); // Adjust this timing to control the fade duration (in milliseconds)
        
        if (bannerImgIndex === 0) {
            banner.style.backgroundSize = '2100px';
            banner.style.backgroundPosition = '0 -400px';
            banner.style.backgroundAttachment = 'fixed';
        } else if (bannerImgIndex === 1) {
            banner.style.backgroundSize = '2000px';
            banner.style.backgroundAttachment = 'fixed';
        } else if (bannerImgIndex === 2) {
            banner.style.backgroundSize = '3500px';
            banner.style.backgroundPosition = '-200px 150px';
            banner.style.backgroundAttachment = 'fixed';
        }
    }, 1000); // Adjust this timing to control the image change delay (in milliseconds)
}

setInterval(bannerImgChanger, 8000);




