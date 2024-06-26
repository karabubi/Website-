document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("#gallery img");

    images.forEach(image => {
        image.addEventListener("mouseover", function() {
            this.style.filter = "brightness(0.8)";
        });

        image.addEventListener("mouseout", function() {
            this.style.filter = "brightness(1)";
        });
    });
});
