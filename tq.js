// script.js
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const h1 = document.querySelector('.thank-you-message h1');
    const p = document.querySelector('.thank-you-message p');

    // Delay the fade-in animation
    setTimeout(() => {
        container.style.opacity = '1';
        h1.style.opacity = '1';
        p.style.opacity = '1';
    }, 500); // Adjust the delay as needed
});