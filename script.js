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
