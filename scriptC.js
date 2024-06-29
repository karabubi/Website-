// Optionally, you can use JavaScript to add additional interactivity or dynamic styling adjustments.

//  Change link colors when clicked
document.querySelectorAll('.social-links a').forEach(link => {
    link.addEventListener('click', function() {
        this.style.color = '#ff4500'; // Change to your preferred color
    });
});

//  Change footer text dynamically
const footerText = document.querySelector('footer p');
footerText.textContent = '© ' + new Date().getFullYear() + ' Saleh Omer Ali Alkarabubi';
