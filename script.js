document.addEventListener('DOMContentLoaded', function() {
  var signInToggle = document.getElementById('signInToggle');
  var signUpToggle = document.getElementById('signUpToggle');
  var signInContainer = document.querySelector('.sign-in-container');
  var signUpContainer = document.querySelector('.sign-up-container');

  signInToggle.addEventListener('click', function() {
      signInToggle.classList.add('active');
      signUpToggle.classList.remove('active');
      signInContainer.classList.add('active');
      signUpContainer.classList.remove('active');
  });

  signUpToggle.addEventListener('click', function() {
      signUpToggle.classList.add('active');
      signInToggle.classList.remove('active');
      signUpContainer.classList.add('active');
      signInContainer.classList.remove('active');
  });

  document.getElementById('signInForm').addEventListener('submit', function(event) {
      event.preventDefault();
      
      var email = document.getElementById('signInEmail').value;
      var password = document.getElementById('signInPassword').value;

      alert('Sign In successful!');
      // Here you can add code to submit the form data to the server
      // For example, using fetch API to send a POST request
  });

  document.getElementById('signUpForm').addEventListener('submit', function(event) {
      event.preventDefault();
      
      var password = document.getElementById('signUpPassword').value;
      var confirmPassword = document.getElementById('confirmPassword').value;

      if (password !== confirmPassword) {
          alert('Passwords do not match!');
      } else {
          alert('Sign Up successful!');
          // Here you can add code to submit the form data to the server
          // For example, using fetch API to send a POST request
      }
  });
});
