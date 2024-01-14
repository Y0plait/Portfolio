// Description: Main JS file for the website
// Smooth scroll to the element
function smoothScrollTo(element) {
    const offsetTop = element.offsetTop - ((window.innerHeight - element.offsetHeight) / 2);
    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
}

function attachEventListenerForButtons() {
    const buttons = document.querySelectorAll('.link-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const href = button.getAttribute('data-href');
            smoothScrollTo(document.querySelector(href));
        });
    });
}

// Event listeners
document.addEventListener("DOMContentLoaded", function () {
    attachEventListenerForButtons();
});
