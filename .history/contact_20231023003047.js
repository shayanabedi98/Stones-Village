const inputName = document.querySelector('#input-name');
const inputEmail = document.querySelector('#input-email');
const inputMsg = document.querySelector('#input-msg');


document.querySelector('.contact-form form button').addEventListener('click', () => {
    if (inputEmail && inputMsg && inputName) {
        alert("Thank you for message. We will get back to you within 2 business days.")
    }


})