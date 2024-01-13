// Description: Main JS file for the website

function linkInWholeLi() {
    document.querySelectorAll('nav > ul > li:not(.no-border)').forEach(function (liElement, index) {
        liElement.addEventListener('click', function (event) {
            document.getElementsByClassName('link')[index].click();
        });
    });
}

function smoothScrollTo(element) {
    const offsetTop = element.offsetTop - ((window.innerHeight - element.offsetHeight) / 2);
    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
}

function smoothScrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function smoothScrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}

function attachEventListenerForLinks() {
    document.querySelectorAll('a').forEach((a) => {
        a.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            const section = document.querySelector(href);
            smoothScrollTo(section);
        });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    linkInWholeLi();
    attachEventListenerForLinks();
});
