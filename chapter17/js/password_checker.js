/*
Password checker
*/

document.querySelector("form").addEventListener("submit", e => {
  const password1 = e.target.elements.password1.value;
  const password2 = e.target.elements.password2.value;
  let message = "Password validation successful";
  // Check confirmation input
  if (password1 === password2) {
    const minimalLength = 6;
    // Check password length
    if (password1.length >= minimalLength) {
      const regexPassword = /\d+/;
      // Check the presence of at least one digit
      if (!regexPassword.test(password1)) {
        message = "Error: password must contain at least one digit";
      }
    } else {
      message = `Error: password must be at least ${minimalLength} characters long`;
    }
  } else {
    message = "Error: passwords don't match";
  }
  // Update help text
  document.getElementById("passwordHelp").textContent = message;
  // Optional: prevent form data sending
  e.preventDefault();
});
