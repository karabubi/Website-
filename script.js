// JavaScript to dynamically update the footer text with the current year
document.addEventListener('DOMContentLoaded', (event) => {
    const footerText = document.createElement('footer p');
    footerText.textContent = '© ' + new Date().getFullYear() + ' Saleh Omer Ali Alkarabubi';
    document.body.appendChild(footerText);
});

// Change link colors when clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        this.style.color = '#ff4500'; // Change to your preferred color
    });
});

//  Change footer text dynamically
const footerText = document.querySelector('footer p');
footerText.textContent = '© ' + new Date().getFullYear() + ' Saleh Omer Ali Alkarabubi';


document.addEventListener('DOMContentLoaded', function() {
    const loginLink = document.getElementById('loginLink');
    const loginFormContainer = document.getElementById('loginFormContainer');
    const loginForm = document.getElementById('loginForm');
    const messageDisplay = document.getElementById('messageDisplay');
    let loginAttempts = 0;

    loginLink.addEventListener('click', function(event) {
        event.preventDefault();
        loginFormContainer.style.display = 'block';

 //           Reset username and password fields
              document.getElementById('username').value = '';
              document.getElementById('password').value = '';
    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Replace with your authentication logic
        if (username === 'admin' && password === '123') {
            // Successful login
            messageDisplay.textContent = 'Login successful! Redirecting to Photos page...';
            messageDisplay.style.display = 'block';
            setTimeout(function() {
                window.location.href = 'photos.html';
            }, 3000); // Redirect after 3 seconds
        } else {
            // Failed login attempt
            loginAttempts++;
            if (loginAttempts >= 3) {
                messageDisplay.textContent = 'Login attempts exceeded. Redirecting to Contact page...';
                messageDisplay.style.display = 'block';
                setTimeout(function() {
                    window.location.href = 'contactAdmin.html?loginFailed=true';
                }, 3000); // Redirect after 3 seconds
            } else {
                messageDisplay.textContent = `Incorrect username or password. Attempts left: ${3 - loginAttempts}`;
                messageDisplay.style.display = 'block';
            }
        }

        // Clear form fields
        loginForm.reset();
    });
});

