var swiper = new Swiper(".swiper-1", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    effect: "fade",
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
   
var swiper = new Swiper(".swiper-4", {
    spaceBetween: 20,
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
    breakpoints: {
        600: {
            slidesPerView: 1,
        },
        900: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        },
        1280: {
            slidesPerView: 4,
        }
    }
    });
    
var swiper = new Swiper(".swiper-5", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    centeredSlides: true,
    breakpoints: {
        600: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 5,
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    });

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

const handleScroll = () => {
    if(window.pageYOffset >= numbers.getBoundingClientRect().y && stop == false) {
        animate(text1, 0, 90, 7000);
        animate(text2, 0, 142, 7000);
        animate(text3, 0, 59, 7000);
        stop = true
    }
}


//  header
 let openIcon = document.getElementById('openIcon')
 let closeIcon = document.getElementById('closeIcon')
 let sidebar = document.getElementById('sidebar')

 openIcon.addEventListener('click', () => {
    sidebar.className="sidebar t-1"
 } )

 closeIcon.addEventListener('click', () => {
    sidebar.className="sidebar t-0"
 })

 

