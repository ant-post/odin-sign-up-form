const createAccountBtn = document.getElementById('create-account-btn');
createAccountBtn.addEventListener('click', () => {
   requestAnimationFrame(() => {
       createAccountBtn.classList.add('clicked-btn');
       setTimeout(() => {
           createAccountBtn.classList.remove('clicked-btn');
       }, (100));
   });
});

function checkPasswords(password1, password2) {
    if (password1.value !== password2.value) {
        password2.setCustomValidity("Passwords do not match");
    }
    else {
        password2.setCustomValidity("");
    }
}

const password1 = document.getElementById('user-password-1');
const password2 = document.getElementById('user-password-2');

password1.addEventListener('input', () => checkPasswords(password1, password2));
password2.addEventListener('input', () => checkPasswords(password1, password2));

