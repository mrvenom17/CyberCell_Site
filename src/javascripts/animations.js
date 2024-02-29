var scroll = new LocomotiveScroll({
  el: document.querySelector('.main'),
  smooth: true,
  smartphone: {
     smooth: true,
     smoothing: 0.90,
     smoothMobile:true,
 },
 tablet: {
     smooth: true
 }})
function locomotiveanimation(){
  gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
el: document.querySelector(".main"),
smooth: true,

// for tablet smooth
tablet: { smooth: true },

// for mobile
smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
scrollTop(value) {
  return arguments.length
    ? locoScroll.scrollTo(value, 0, 0)
    : locoScroll.scroll.instance.scroll.y;
},
getBoundingClientRect() {
  return {
    top: 0,
    left: 0,
    width: window.innerWidth,
    height: window.innerHeight
  };
}

// follwoing line is not required to work pinning on touch screen

/* pinType: document.querySelector(".main").style.transform
  ? "transform"
  : "fixed"*/
});



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

locomotiveanimation()

function cursoranimatioon(){
  let cursor = document.querySelector(".cursor");
let swiper_container=document.querySelector(".past-events-container");
  swiper_container.addEventListener("mouseenter",function(dets){
    swiper_container.style.cursor="none";
   gsap.to(cursor,{
    opacity:0.8,
    scale:1,
    transform: 'translate(-50%,-50%)',
    // duration:0.5,
   })
  });
  swiper_container.addEventListener("mousemove",function(dets){
   gsap.to(cursor,{
    left:dets.pageX,
    top:dets.pageY,
   });
});
swiper_container.addEventListener("mouseleave",function(dets){
  swiper_container.style.cursor="none";
 gsap.to(cursor,{
  opacity:0,
  scale:0,
  transform: 'translate(-50%,-50%)',
  // duration:0.5,
 })
});

}
cursoranimatioon();



var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: false,
  centeredSlides: 1,
  slidesPerView: 1,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  breakpoints: {
      // When window width is <= 700px
      700: {
          slidesPerView: 3,
      },
      // More breakpoints can be added if needed
  },
});


function eventanimation() {
  var events = document.querySelectorAll('.past-event');

  events.forEach(event => {
    gsap.from(event, {
      y:"100%",
      opacity:0,
      duration:1,
      scrollTrigger: {
        trigger: '.page4',
        toggleActions:"restart none restart none",
        scroller: '.main',
        start: 'top 40%',
        end: '10% 50%',
        stagger: true,
      },
    });
  });
}

window.onload = eventanimation;

gsap.to(".horizontal h1",{
  transform:"translateX(-80%)",
  scrollTrigger:{
    trigger:".horizontal",
    scroller:".main",
    scrub:2,
    start:"top 0",
    end:"top -100%",
    pin:true,
  }
})

