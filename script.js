// script.js
document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.slider-container');

    // Function to scroll right
    function scrollRight() {
        container.scrollBy(200, 0);
    }

    // Function to scroll left
    function scrollLeft() {
        container.scrollBy(-200, 0);
    }

    // Function to scroll up
    function scrollUp() {
        container.scrollBy(0, -200);
    }

    // Function to scroll down
    function scrollDown() {
        container.scrollBy(0, 200);
    }

    // Optional: Add event listeners if you have buttons or other controls
});
