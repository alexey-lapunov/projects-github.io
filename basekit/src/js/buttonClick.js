var buttonClass = document.querySelectorAll('.button-click');

function buttonBust() {
    for( var i = 0; i < buttonClass.length; i++ ) {
        buttonClass[i].addEventListener('click', buttonAddClass);
        buttonClass[i].addEventListener('animationend', buttonRemoveClass);
    }
}

function buttonAddClass() {
    this.classList.add('rubberBand');
}

function buttonRemoveClass() {
    this.classList.remove('rubberBand');
}

buttonBust();