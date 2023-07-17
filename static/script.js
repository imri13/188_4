

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
    } else if (event.type === 'mouseup') {
      passwordInput.type = 'password';
      eyeIcon.classList.remove('active');
    }
}

var favorites;
// Make a request to the server
var xhr = new XMLHttpRequest();
xhr.open('GET', '/selectFavorites', true);

xhr.onload = function() {
  if (xhr.status >= 200 && xhr.status < 400) {
    // Parse the response as JSON
    var sqlResults = JSON.parse(xhr.responseText);
    favorites=sqlResults;
    // Process the SQL results in your JavaScript code
    console.log(sqlResults);
  } else {
    // Handle error cases
    console.error('An error occurred while fetching SQL results.');
  }
};

xhr.onerror = function() {
  // Handle network errors
  console.error('A network error occurred.');
};

// Send the AJAX request
xhr.send();


// Function to fill the heart
function addFavorite(button) {
    button.classList.add("filled");
    const placeID = button.getAttribute('data-placeID');
    console.log(favorites);
    for (let i = 0; i < favorites.length; i++) {
      const element = favorites[i].placeID;
      if (placeID==element) {
        button.disabled = true;
        return;
      }
    }
    document.cookie = "placeID=" + placeID;
    button.disabled = true;
    location.href = '/insertFavorite';
}

function removeFavorite(button) {
  button.classList.remove("filled");
  const placeID = button.getAttribute('data-placeID');
  document.cookie = "placeID=" + placeID;
  button.disabled = true;
  location.href = '/removeFavorite';
}

document.addEventListener("DOMContentLoaded", function() {
  var wrongMessage = document.getElementById("wrongMessage");
  wrongMessage.style.display = "block";

  setTimeout(function() {
    wrongMessage.style.display = "none";
  }, 2000);
});
