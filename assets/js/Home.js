var swiper = new Swiper(".swiper-1", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    // effect: "fade",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
        return `<div id="border" class=${className}><span id="circle"></span></div>`;
    },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
 autoplay: {
 delay: 2500,
 disableOnInteraction: false,
  },
    });


var swiper = new Swiper(".swiper-2", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
        return `<div id="border" class=${className}><span id="circle"></span></div>`;
    },
    },
    breakpoints: {
        900: {
            slidesPerView: 2,

        },
        768: {
            slidesPerView: 1,
        },
        1280: {
            slidesPerView: 3,
    
        }
    }
    });

var swiper = new Swiper(".swiper-3", {
    loop: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
        return `<div id="border" class=${className}><span id="circle"></span></div>`;
        },
    },
    breakpoints: {
        900: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 1,
        },
        1280: {
            slidesPerView: 3,
        
        }
    }
    });
   


var swiper = new Swiper(".swiper-sponsors", {
    spaceBetween: 30,
    slidesPerView: 1,
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        900: {
            slidesPerView: 4,

        },
        1280: {
            slidesPerView: 5,
    
        }
    }
    });

// fancybox
$('[data-fancybox]').fancybox({
    // Options will go here
    buttons : [
      'close'
    ],
    wheel : false,
    transitionEffect: "slide",
     // thumbs          : false,
    // hash            : false,
    loop            : true,
    // keyboard        : true,
    toolbar         : false,
    // animationEffect : false,
    // arrows          : true,
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

// Counter animation
function animate(obj, initVal, lastVal, duration) {
    let startTime = null;

    let currentTime = Date.now();
    const step = (currentTime ) => {
    if (!startTime) {
        startTime = currentTime ;
    }

    const progress = Math.min((currentTime - startTime)/ duration, 1);

    obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);

    if (progress < 1) {
        window.requestAnimationFrame(step);
    } else {
        window.cancelAnimationFrame(window.requestAnimationFrame(step));
        }
    };

    //start animating
    window.requestAnimationFrame(step);
}

let text1 = document.getElementById('first');
let text2 = document.getElementById('second');
let text3 = document.getElementById('third');
let stop = false;
let numbers = document.getElementById('statistics')

// header on scrolll
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

// functions on scroll

const handleScroll = () => {

                    
    if(window.pageYOffset >= numbers.getBoundingClientRect().y && stop == false) {
        animate(text1, 0, 90, 7000);
        animate(text2, 0, 142, 7000);
        animate(text3, 0, 59, 7000);
        stop = true
    }

    // mobile header
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