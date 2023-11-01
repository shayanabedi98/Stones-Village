const inputName = document.querySelector('#input-name');
const inputEmail = document.querySelector('#input-email');
const inputMsg = document.querySelector('#input-msg');
const form = document.querySelector('.contact-form form');

form.addEventListener('submit', (e) => {
    document.querySelector('.contact-form form button').addEventListener('click', () => {
        if (inputEmail.value && inputMsg.value && inputName.value && validateEmail(inputEmail.value)) {
            alert("Thank you for message. We will get back to you within 2 to 3 business days.")
        } else if (inputName.value.toLowerCase().includes('robertshemi')) {
            e.preventDefault()
            alert('Sent!')
        }
    })
})

const validateEmail = (email) => {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }