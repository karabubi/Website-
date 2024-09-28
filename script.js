document.addEventListener("DOMContentLoaded", function () {
  const loginLink = document.getElementById("loginLink");
  const loginFormContainer = document.getElementById("loginFormContainer");
  const loginForm = document.getElementById("loginForm");
  const messageDisplay = document.getElementById("messageDisplay");
  let loginAttempts = 0;

  loginLink.addEventListener("click", function (event) {
    event.preventDefault();
    loginFormContainer.style.display = "block";
    messageDisplay.textContent = ""; // Clear any previous messages
    loginForm.reset(); // Reset form fields
  });

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Replace with your authentication logic
    if (username === "admin" && password === "123") {
      // Successful login
      messageDisplay.textContent =
        "Login successful! Redirecting to Photos page...";
      messageDisplay.style.display = "block";
      messageDisplay.style.color = "green"; // Set message color to green for success
      setTimeout(function () {
        window.location.href = "photos.html";
      }, 3000); // Redirect after 3 seconds
    } else {
      // Failed login attempt
      loginAttempts++;
      messageDisplay.style.color = "red"; // Set message color to red for failed attempts
      if (loginAttempts >= 3) {
        messageDisplay.textContent =
          "Login attempts exceeded. Redirecting to Contact page...";
        messageDisplay.style.display = "block";
        setTimeout(function () {
          window.location.href = "contactAdmin.html?loginFailed=true";
        }, 3000); // Redirect after 3 seconds
      } else {
        messageDisplay.textContent = `Incorrect username or password. Attempts left: ${
          3 - loginAttempts
        }`;
        messageDisplay.style.display = "block";
      }
    }

    // Clear form fields
    loginForm.reset();
  });
});
