var loginSwitch = document.getElementById("toggleAll");
loginSwitch.addEventListener("click", switchLogin);

var loginText = document.getElementById("login-text");
var signupText = document.getElementById("signup-text");
var nameField = document.getElementById("name");
var nameLabel = document.getElementById("nameLabel");
var emailField = document.getElementById("email");
var emailLabel = document.getElementById("emailLabel");
var signupbtn = document.getElementById("submit");
var loginHeading = document.getElementById("login-heading");
var loginSubHeading = document.getElementById("login-subheading");
var loginformHeading = document.getElementById("login-form-heading");
var loginformSubHeading = document.getElementById("login-form-subheading");

var currentLoginState = false;
signupText.classList.add("text-accent2");

function switchLogin() {
  currentLoginState = !currentLoginState;
  console.log(`current switch state : ${currentLoginState}`);
  if (currentLoginState) {
    switchToLogin();
  } else {
    switchToSignup();
  }
}

function switchToLogin() {
  signupText.classList.remove("text-accent2");
  loginText.classList.add("text-accent2");
  nameField.setAttribute("type", "email");
  nameLabel.innerHTML = "Email";
  emailField.setAttribute("type", "password");
  emailLabel.innerHTML = "Password";
  signupbtn.innerHTML = "Login";
  loginHeading.innerHTML = `<span class="text-accent">Snout</span> & Sign In:`;
  loginSubHeading.innerHTML = "Where Every Click Counts for Canines!";
  loginformHeading.innerHTML = `<span class="text-accent">Snout</span> & Sign In:`;
  loginformSubHeading.innerHTML = "Where Every Click Counts for Canines!";
}

function switchToSignup() {
  loginText.classList.remove("text-accent2");
  signupText.classList.add("text-accent2");
  nameField.setAttribute("type", "text");
  nameLabel.innerHTML = "Name";
  emailField.setAttribute("type", "email");
  emailLabel.innerHTML = "Email";
  signupbtn.innerHTML = "Sign up";
  loginHeading.innerHTML = `<span class="text-accent">Snout</span> & Sign Up:`;
  loginSubHeading.innerHTML = "Join Our Pack and Start Making Tails Wag 🐶";
  loginformHeading.innerHTML = `<span class="text-accent">Snout</span> & Sign Up:`;
  loginformSubHeading.innerHTML = "Join Our Pack and Start Making Tails Wag 🐶";
}
