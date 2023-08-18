var prevScrollPos = window.scrollY || window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.scrollY || window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
    } else {
        document.getElementById("header").style.top = "-100px";
    }
    prevScrollPos = currentScrollPos;
};