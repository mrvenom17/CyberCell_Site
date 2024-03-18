function cursoranimatioon() {
  let cursor = document.querySelector(".cursor");
  let swiper_container = document.querySelector(".past-events-container");
  swiper_container.addEventListener("mouseenter", function (dets) {
    swiper_container.style.cursor = "none";
    gsap.to(cursor, {
      opacity: 0.8,
      scale: 1,
      transform: "translate(-50%,-50%)",
      // duration:0.5,
    });
  });
  swiper_container.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      left: dets.pageX,
      top: dets.pageY,
    });
  });
  swiper_container.addEventListener("mouseleave", function (dets) {
    swiper_container.style.cursor = "none";
    gsap.to(cursor, {
      opacity: 0,
      scale: 0,
      transform: "translate(-50%,-50%)",
      // duration:0.5,
    });
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
  gsap.from(".past-events-container .event", {
    y: "100%",
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".page4",
      // toggleActions:"restart none restart none",
      scroller: "body",
      start: "top 40%",
      end: "top -50%",
    },
  });

  gsap.from(".upcoming-events-container .event", {
    x: "100%",
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".page3",
      // toggleActions:"restart none restart none",
      scroller: "body",
      start: "top 40%",
      end: "top -50%",
    },
  });
}

window.onload = eventanimation;

gsap.to(".horizontal h1", {
  transform: "translateX(-80%)",
  scrollTrigger: {
    trigger: ".horizontal",
    scroller: "body",
    scrub: 2,
    start: "top 0",
    end: "top -100%",
    pin: true,
  },
});



function navbar_animation() {
  let menu = document.querySelector(".nright2");
  let show = false;
  let a = document.querySelectorAll(".overflow-nav .link-container a");
  a.forEach((element) => {
    element.addEventListener("click", () => {
      gsap.to(".overflow-nav", {
        x: "140%",
        duration: 1,
        display: "none",
      });
      show = !show;
    });
  });

  menu.addEventListener("click", function (e) {
    if (show === false) {
      gsap.to(".overflow-nav", {
        x: "30%", // Corrected syntax for setting the transform property
        duration: 1,
        display: "block",
      });
    } else {
      gsap.to(".overflow-nav", {
        x: "140%",
        duration: 1,
        display: "none",
      });
    }
    show = !show;
  });
}

navbar_animation();

function landing_animation() {
  let tl = gsap.timeline();
  tl.from(".nav-left", {
    opacity: 0,
    y: -50,
    duration: 0.4,
    delay: 0.5,
  });

  if (window.matchMedia("(min-width: 900px)").matches) {
    tl.from("nav .nav-right h4", {
      opacity: 0,
      y: -50,
      duration: 0.5,
      stagger: 0.2,
    });
  }

  if (window.matchMedia("(max-width: 900px)").matches) {
    tl.from(".nright2", {
      opacity: 0,
      y: -50,
      duration: 0.4,
    });
  }

  tl.from(".hero .left", {
    opacity: 0,
    y: 50,
    duration: 0.5,
  });
  tl.from(".right img", {
    opacity: 0,
    x: "100%",
    duration: 0.5,
  });
}
landing_animation();

function team_animation() {
  let tl = gsap.timeline();
  gsap.from(".main-title span", {
    opacity: 0,
    y: 200,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".page2",
      scroller: "body",
      start: "top 40%",
      end: "10% 50%",
    },
  });
  gsap.from(".page2 .club-head", {
    x: "100%",
    duration: 0.5,
    stagger: 0.2,
    ease: "linear",
    scrollTrigger: {
      trigger: ".page2",
      scroller: "body",
      start: "top 40%",
      end: "10% 50%",
    },
  });
  gsap.from(".page2 .container", {
    x: "100%",
    duration: 0.5,
    stagger: 0.2,
    ease: "linear",
    scrollTrigger: {
      trigger: ".page2",
      scroller: "body",
      start: "top 40%",
      end: "10% 50%",
    },
  });
}
team_animation();
