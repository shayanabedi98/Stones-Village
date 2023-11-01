const banner = document.querySelector('.banner1');
const bannerImg = ['./resources/bg3.jpg', './resources/bg4.jpg'];
let bannerImgIndex = 0;
const logoName = document.querySelector('#logo-name');
const logoCube = document.querySelector('#logo-cube');
const navbar = document.querySelector('.navbar');
const instagram = document.querySelector('#example-instagram');
const instagramBanner = document.querySelector('.banner-overlay button');
const mobileMenuBtn = document.querySelector('.phone-menu-button img');
const mobileMenuBtnDiv = document.querySelector('.phone-menu-button');
const mobileMenu = document.querySelector('.navbar-menu-mobile');
const closeMobileMenuBtn = document.querySelector('.close-navbar-menu-mobile img');
const closeMobileMenu = document.querySelector('.close-navbar-menu-mobile');

function adjustMenuDisplay() {
    if (window.innerWidth >= 901) {
        mobileMenuBtnDiv.style.display = 'none';
        mobileMenu.style.display = 'none';
        closeMobileMenu.style.display = 'none';
    } else if (closeMobileMenu.style.display === 'grid') {
        mobileMenuBtnDiv.style.display = 'none';
    } else if (closeMobileMenu.style.display === 'none') {
        mobileMenuBtnDiv.style.display = 'grid';
    }
}

adjustMenuDisplay();

window.addEventListener('resize', adjustMenuDisplay);

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.style.display = 'flex';
    mobileMenuBtnDiv.style.display = 'none';
    closeMobileMenu.style.display = 'grid';
});

closeMobileMenuBtn.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    mobileMenuBtnDiv.style.display = 'grid';
    closeMobileMenu.style.display = 'none';
});



if (instagramBanner) {
    instagramBanner.addEventListener('click', () => {
        window.location.href = './inventory';
    });
}

logoCube.addEventListener('click', () => {
    window.location.href = './';
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
    window.location.href = './';
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
        banner.classList.remove('banner2', 'banner3', 'banner4');
        banner.classList.add('banner1');
        banner.style.opacity = '1';
        banner.style.backgroundAttachment = 'fixed';
        
        setTimeout(() => {
            banner.style.opacity = '0';
        }, 7000)

    } else if (bannerImgIndex === 1) {
        banner.classList.remove('banner1', 'banner3', 'banner4');
        banner.classList.add('banner2');
        banner.style.opacity = '1';
        banner.style.backgroundAttachment = 'fixed';
        
        setTimeout(() => {
            banner.style.opacity = '0';
        }, 7000)

    } else if (bannerImgIndex === 2) {
        banner.classList.remove('banner1', 'banner2', 'banner4');
        banner.classList.add('banner3');
        banner.style.opacity = '1';
        banner.style.backgroundAttachment = 'fixed';
        
        setTimeout(() => {
            banner.style.opacity = '0';
        }, 7000)
    } else if (bannerImgIndex === 3) {
        banner.classList.remove('banner1', 'banner2', 'banner3');
        banner.classList.add('banner4');
        banner.style.opacity = '1';
        banner.style.backgroundAttachment = 'fixed';
        
        setTimeout(() => {
            banner.style.opacity = '0';
        }, 7000)
    }
};

bannerImgChanger();

setInterval(bannerImgChanger, 8000)

instagram.addEventListener('click', () => {
    window.open('https://www.instagram.com/stonesvillage/', '_blank')
})