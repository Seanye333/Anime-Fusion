// Function to open the signup modal
function openSignupPopup() {
    const signupPopup = document.getElementById('signup-popup');
    signupPopup.classList.add('is-active');
}

// Function to close the signup modal
function closeSignupPopup() {
    const signupPopup = document.getElementById('signup-popup');
    signupPopup.classList.remove('is-active');
}

// Event listener to close the signup modal when clicking the modal background
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('modal-background')) {
        closeSignupPopup();
    }
});

// Function to handle signup form submission
function handleSignup() {
    const email = document.getElementById('signup-email-input').value;
    const password = document.getElementById('signup-password-input').value;
    if (email && password) {
        alert('Signup successful. Redirect or perform actions here.');
        closeSignupPopup();
    } else {
        alert('Please fill in all fields.');
    }
}

 // Function to open the sign-in modal
function openSigninPopup() {
    const signinPopup = document.getElementById('login-modal');
    signinPopup.classList.add('is-active');
}

// Function to close the sign-in modal
function closeSigninPopup() {
    const signinPopup = document.getElementById('login-modal');
    signinPopup.classList.remove('is-active');
}

// Event listener to open the sign-in popup when clicking the "Login" button
document.getElementById('open-signin-modal').addEventListener('click', openSigninPopup);
document.getElementById('close-login-modal').addEventListener('click', closeSigninPopup);
