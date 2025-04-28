// Get the form and input fields
const form = document.getElementById('signup-form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

// Error message elements
const usernameError = document.getElementById('username-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const confirmPasswordError = document.getElementById('confirm-password-error');

// Validate the form on submit
form.addEventListener('submit', function(event) {
    let valid = true;

    // Clear previous error messages
    usernameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';

    // Check if username is too short
    if (username.value.length < 5) {
        usernameError.textContent = 'Username must be at least 5 characters long';
        valid = false;
    }

    // Check if email contains '@'
    if (!email.value.includes('@')) {
        emailError.textContent = 'Please enter a valid email address';
        valid = false;
    }

    // Check if passwords match
    if (password.value !== confirmPassword.value) {
        confirmPasswordError.textContent = 'Passwords do not match';
        valid = false;
    }

    // Prevent form submission if validation fails
    if (!valid) {
        event.preventDefault();
    }
});
