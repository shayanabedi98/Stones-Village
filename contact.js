const inputName = document.querySelector('#input-name');
const inputEmail = document.querySelector('#input-email');
const inputMsg = document.querySelector('#input-msg');

document.querySelector('.contact-form form button').addEventListener('click', () => {
    if (inputEmail.value && inputMsg.value && inputName.value && validateEmail(inputEmail.value)) {
        alert("Thank you for message. We will get back to you within 2 to 3 business days.")
    }
})

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }