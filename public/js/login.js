const signupFormHandler = async (event) => {
  event.preventDefault();

  const signupUsername = document
    .querySelector('#username-signup')
    .value.trim();
  const signupEmail = document.querySelector('#email-signup').value.trim();
  const signupPassword = document
    .querySelector('#password-signup')
    .value.trim();

  if (signupUsername && signupEmail && signupPassword) {
    try {
      const response = await axios.post('/api/users/signup', {
        signupUsername,
        signupEmail,
        signupPassword
      });

      if (response.ok) {
        console.log('Signup successful:', response);
        document.location.replace('/homepage');
      } else {
        console.error('Failed to sign up:', response);
        alert('Failed to sign up');
      }
    } catch (error) {
      console.error('Error signing up:', error);
      alert('Failed to sign up');
    }
  }
};

const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' }
      });

      if (response.ok) {
        console.log('Login successful:', response);
        document.location.replace('/homepage');
      } else {
        console.error('Failed to log in:', response);
        alert('Failed to log in');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Failed to log in');
    }
  }
};

document
  .querySelector('button.signup')
  .addEventListener('click', signupFormHandler);
document
  .querySelector('button.login')
  .addEventListener('click', loginFormHandler);

// // Function to open the signup modal
// function openSignupPopup() {
//     const signupPopup = document.getElementById('signup-popup');
//     signupPopup.classList.add('is-active');
// }

// // Function to close the signup modal
// function closeSignupPopup() {
//     const signupPopup = document.getElementById('signup-popup');
//     signupPopup.classList.remove('is-active');
// }

// // Event listener to close the signup modal when clicking the modal background
// document.addEventListener('click', function (event) {
//     if (event.target.classList.contains('modal-background')) {
//         closeSignupPopup();
//     }
// });

// // Function to handle signup form submission
// function handleSignup() {
//     const email = document.getElementById('signup-email-input').value;
//     const password = document.getElementById('signup-password-input').value;
//     if (email && password) {
//         alert('Signup successful. Redirect or perform actions here.');
//         closeSignupPopup();
//     } else {
//         alert('Please fill in all fields.');
//     }
// }

//  // Function to open the sign-in modal
// function openSigninPopup() {
//     const signinPopup = document.getElementById('login-modal');
//     signinPopup.classList.add('is-active');
// }

// // Function to close the sign-in modal
// function closeSigninPopup() {
//     const signinPopup = document.getElementById('login-modal');
//     signinPopup.classList.remove('is-active');
// }

// // Event listener to open the sign-in popup when clicking the "Login" button
// document.getElementById('open-signin-modal').addEventListener('click', openSigninPopup);
// document.getElementById('close-login-modal').addEventListener('click', closeSigninPopup);
