function stickyElement(e) {

    var header = document.querySelector('.header');
    var headerHeight = getComputedStyle(header).height[0];
    var navbar = document.querySelector('.navigation');
    var scrollValue = window.scrollY;

    if (scrollValue > headerHeight) {
        navbar.classList.add('is-fixed');

    } else if (scrollValue < headerHeight) {
        navbar.classList.remove('is-fixed') 
        navbar.style.backgroundColor ="#003a63";

    }

}

window.addEventListener('scroll', stickyElement);


