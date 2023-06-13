// script.js

// Sign Up Button on Login Page
function signupButtonFunc() {
    window.location.href = '/signUp';
}

// Login Button on Sign Up Page
function loginButtonFunc() {
    window.location.href = '/login';
}

// Function to show password on mouse down and hide on mouse up
function togglePasswordVisibility(event) {
    const passwordInput = document.getElementById('userPassword');
    const eyeIcon = document.querySelector('.toggle-password');
  
    if (event.type === 'mousedown') {
      passwordInput.type = 'text';
      eyeIcon.classList.add('active');
    } else if (event.type === 'mouseup' || event.type === 'mouseout') {
      passwordInput.type = 'password';
      eyeIcon.classList.remove('active');
    }
  }