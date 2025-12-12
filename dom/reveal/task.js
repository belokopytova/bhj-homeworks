let i = 0;
let isInView= function (element) {
    const viewHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect();
    let f = false;
    if (elementTop.top >= 0 || elementTop.bottom >= 0) {
        f = elementTop.top < viewHeight ? true : false;
    }
    if (f == true) {
        element.classList.add('reveal_active');
    } else {
        element.classList.remove('reveal_active');
    }
    if (reveal[0].getBoundingClientRect().top < (-viewHeight)) {
        i = 1;
    } else {
        i = 0;
    }
};

const reveal = document.querySelectorAll('.reveal')
window.onscroll = function () {
    isInView(reveal[i]);
}