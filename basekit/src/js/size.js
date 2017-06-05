var wrapperBlock = document.querySelector('.information-specification__wrapper'),
    sizeArray = document.querySelectorAll('.information-specification__size');

wrapperBlock.onclick = function(even) {
    var target = even.target;

    for( var i = 0; i < sizeArray.length; i++ ) {
        sizeArray[i].classList.remove('active');
    }

    target.classList.add('active');
};
