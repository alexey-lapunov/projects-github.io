var scrollHeight = document.querySelector('.banner').offsetHeight - 1,
    buttonDown = document.querySelector('.banner-button-down');

buttonDown.addEventListener('click', runScroll);

function scrollDown() {
    window.scrollTo(0, scrollHeight);
}


function runScroll() {
    scrollTo(document.body, scrollHeight, 200);
}

function scrollTo(element, to, duration) {
    console.log(scrollHeight);
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop == to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
}