const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('toggle-password');
const passwordRequirements = document.getElementById('password-requirements');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

togglePassword.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePassword.textContent = '🙈';
    } else {
        passwordInput.type = 'password';
        togglePassword.textContent = '👁️';
    }
});

passwordInput.addEventListener('focus', () => {
    passwordRequirements.style.display = 'block';
});

passwordInput.addEventListener('blur', () => {
    passwordRequirements.style.display = 'none';
});

document.getElementById('login').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = passwordInput.value;

    emailError.textContent = '';
    passwordError.textContent = '';

    if (!email.includes('@')) {
        emailError.textContent = 'Please enter a valid email.';
    }

    if (password.length < 8 || !/\d/.test(password) || !/[A-Z]/.test(password)) {
        passwordError.textContent = 'Password does not meet requirements.';
    }

    if (!emailError.textContent && !passwordError.textContent) {
        alert('Login successful!');
    }
});
