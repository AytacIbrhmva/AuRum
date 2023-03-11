// header on scroll
var prevScrollpos;
let header = document.getElementById("header-mobile");

const mobHeaderOnScroll = () => {

    var currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollPos > prevScrollpos) {
        header.classList = 'header-mobile non-fixed'
    } else {
        header.classList = 'header-mobile fixed'
    }
    prevScrollpos = currentScrollPos;
}


// fancybox
$('[data-fancybox]').fancybox({
buttons : [
'close'
],
wheel : false,
transitionEffect: "slide",
loop            : true,
toolbar         : false,
clickContent    : false
});

// hide navbar
let openIcon = document.getElementById('openIcon')
let closeIcon = document.getElementById('closeIcon')
let sidebar = document.getElementById('sidebar')

openIcon.addEventListener('click', () => {
    sidebar.className="sidebar t-1"
    document.body.style.overflowY='hidden'
    document.getElementById('toTop').style.display = 'none'
} )

closeIcon.addEventListener('click', () => {
    sidebar.className="sidebar t-0"
    document.body.style.overflowY='scroll'
    document.getElementById('toTop').style.display = 'block'

})

// TO TOP
function scrollToTop() {
    if (document.body.scrollTop !== 0 || document.documentElement.scrollTop !== 0) {
        window.scrollBy(0, -50);
        requestAnimationFrame(scrollToTop);
    }
}

// toTop btn on scroll
var firstScrollpos;

const toTopScroll = () => {

    var lastScrollPos = window.pageYOffset || document.documentElement.scrollTop;

    if (lastScrollPos > firstScrollpos) {
        document.getElementById('toTop').style.display="block"
    } else {
        document.getElementById('toTop').style.display="none"
    }
    firstScrollpos = lastScrollPos;
}


// functions on scroll
const handleScroll = () => {
    if(window.pageYOffset >=  70) {
        mobHeaderOnScroll()
    } else {
        header.classList = 'header-mobile'
    }

    if(window.pageYOffset >= 400) {
        toTopScroll()
    } else {
        document.getElementById('toTop').style.display="none"
    }
}