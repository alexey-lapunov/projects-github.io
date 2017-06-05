var header = document.querySelector('.header'),
    classActive = 'active';

window.addEventListener('scroll', handlerScroll);

function handlerScroll() {
    var scrollWindow = window.pageYOffset;

    if( scrollWindow > document.documentElement.clientHeight ) {
        header.classList.add(classActive);
    } else {
        header.classList.remove(classActive);
    }
}