// JavaScript can be used for further interactivity if needed
document.addEventListener('DOMContentLoaded', function() {
    // Example: Adding hover effects for navigation items
    const menuItems = document.querySelectorAll('nav ul li');

    menuItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.classList.add('active');
        });

        item.addEventListener('mouseout', function() {
            this.classList.remove('active');
        });
    });
});
