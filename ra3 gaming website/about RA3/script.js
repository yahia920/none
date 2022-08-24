const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
} else {
    menuBtn.classList.remove('open');
    menuOpen = false;
}
});

let span = document.querySelector(".up");

window.onscroll = function () {
    //console.log (this.scrollY);
    if (this.scrollY >= 600) {
    span.classList.add ("show");
    } else {
    span.classList.remove ("show");
    }
};

span.oneclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};