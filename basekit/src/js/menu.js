var headerButton = document.querySelector('.header-button'),
    menu = document.querySelector('.menu'),
    menuButton = document.querySelector('.menu-bottom-block__button'),
    menuProduct = document.querySelector('.menu-bottom-block-list'),
    cardItemsWrap = document.querySelector('.menu-bottom-block-list'),
    menuArrow = document.querySelector('.menu-bottom-block__arrow'),
    gradient = document.querySelector('.gradient'),
    body = document.querySelector('body');
var activeClass = 'active';

headerButton.addEventListener('click', menuShow);
menuButton.addEventListener('click', productShow);
gradient.addEventListener('click', menuShow);

function menuShow() {
    toggleClassElement(menu, activeClass);
    toggleClassElement(headerButton, activeClass);
    toggleClassElement(gradient, activeClass);
    toggleClassElement(body, activeClass);
}

function productShow() {
    toggleClassElement(menuProduct, activeClass);
    toggleClassElement(menuArrow, activeClass);
    animateHeightElement(cardItemsWrap);
}

function animateHeightElement(element) {
    var currentHeight = element.offsetHeight;
    var nextHeight = 0;

    if(currentHeight === 0) {
        element.style.height = 'auto';
        nextHeight = element.offsetHeight;
        element.style.height = '0';
        element.offsetHeight;
    }

    element.style.height = nextHeight + 'px';
}
