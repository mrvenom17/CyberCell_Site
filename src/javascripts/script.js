let upcoming_events_container=document.querySelector(".upcoming-events-container");
let past_events_container=document.querySelector(".past-events-container");
let upcoming_event="";
let past_event="";
let popup_status=false;
let popup=document.querySelector(".popup-container")
let popup_close=document.querySelector(".popup-close");
let body=document.querySelector(".page1")
let loader=document.querySelector(".popup span")
var intervalId;
let page1=document.querySelector(".main")

function events(){
    fetch("/events.json")
    .then(response=>response.json())
    .then(data=>{
        const upcoming_events=data.upcoming_events;
        upcoming_events.forEach(event => {

            upcoming_event+=`
            <div class="event h-[550px] w-fit flex flex-col items-center justify-evenly p-8 ">
                    <div class="image h-[250px] w-[400px] bg-white border-4 border-zinc-800 overflow-hidden max-[700px]:w-[300px]">
                        <img src=${event.image} alt="" id="event-image" class="h-full w-full">
                    </div>
                    <span class="text-xl">${event.date}</span>
                    <span class="text-3xl">${event.name}</span>
                    <span class="text-2xl text-center">${event.venue}</span>
                    <a class="px-6 py-3 bg-white text-black rounded-full text-lg border-2 hover:bg-black hover:text-white hover:border-white duration-500" href="/cyberknight.html">Know more</a>
                    
                </div>
            `

            upcoming_events_container?upcoming_events_container.innerHTML=upcoming_event:"";


        });
        const past_events=data.past_events;
        past_events.forEach(event => {
            past_event+=`
            <div class="swiper-slide event past-event h-[550px] w-fit flex flex-col items-center justify-evenly p-8">
                    <div class="image h-[250px] w-[400px] bg-white border-4 border-zinc-800 overflow-hidden max-[700px]:w-[300px]">
                        <img src=${event.image} alt="" id="event-image" class="h-full w-full">
                    </div>
                    <span class="text-xl">${event.date}</span>
                    <span class="text-3xl">${event.name}</span>
                    <span class="text-2xl text-center">${event.venue}</span>
                    <button class="px-6 py-3 bg-white text-black rounded-full text-lg">know more</button>
                </div>
            `
            past_events_container.innerHTML=past_event;
        })
    })
}

events()

function expandBox(box) {
    const isExpanded = box.style.transform === "scale(1.2)";
  
    if (isExpanded) {
      box.style.transform = "scale(1)"; /* Return box to normal size */
      box.style.zIndex = "0"; /* Reset box z-index */
      box.style.boxShadow = "none"; /* Reset box shadow */
    } else {
      // box.style.transform = "scale(1.2)"; /* Enlarge clicked box */
      box.style.zIndex = "1"; /* Bring box to the front */
      // box.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.8)"; /* Enhance shadow */
  
      const allBoxes = document.querySelectorAll(".team-member");
      allBoxes.forEach((item) => {
        if (item !== box) {
          // item.style.transform = "scale(0.9)"; /* Shrink other boxes */
          item.style.zIndex = "0"; /* Push other boxes to the back */
        }
      });
    }
  }

  var intervalId; // Declare intervalId globally
  document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
      popuphandler();
    }, 4000); // 5000 milliseconds = 5 seconds
  });
  function popuphandler() {
    gsap.from(popup,{
      scale:0.7,
    })
    page1.style.filter="blur(10px)"
    popup.style.display="block"


    popup_close.addEventListener("click", function () {
      popup.style.display = "none";
      page1.style.filter="";

      
    });
  
    gsap.to(loader, {
      width: 0,
      duration: 5,
      ease: "linear",
      onUpdate: function () {
        // Check if loader width is close to zero
        if (loader.width <= 1) {
          popup.style.display = "none";
          page1.style.filter="";
        }
      },
      onComplete: function () {
        clearInterval(intervalId);
        popup.style.display = "none"; // Ensure hiding even if onUpdate doesn't trigger
        page1.style.filter="";

      },
    });
  }
  

  function countdown(){
    const countDownClock = (number = 100, format = 'seconds') => {
  
      const d = document;
      const daysElement = d.querySelector('.days');
      const hoursElement = d.querySelector('.hours');
      const minutesElement = d.querySelector('.minutes');
      const secondsElement = d.querySelector('.seconds');
      let countdown;
      convertFormat(format);
      
      
      function convertFormat(format) {
        switch(format) {
          case 'seconds':
            return timer(number);
          case 'minutes':
            return timer(number * 60);
            case 'hours':
            return timer(number * 60 * 60);
          case 'days':
            return timer(number * 60 * 60 * 24);             
        }
      }
    
      function timer(seconds) {
        const now = Date.now();
        const then = now + seconds * 1000;
    
        countdown = setInterval(() => {
          const secondsLeft = Math.round((then - Date.now()) / 1000);
    
          if(secondsLeft <= 0) {
            clearInterval(countdown);
            return;
          };
    
          displayTimeLeft(secondsLeft);
    
        },1000);
      }
    
      function displayTimeLeft(seconds) {
        daysElement.textContent = Math.floor(seconds / 86400);
        hoursElement.textContent = Math.floor((seconds % 86400) / 3600);
        minutesElement.textContent = Math.floor((seconds % 86400) % 3600 / 60);
        secondsElement.textContent = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
      }
    }
    
    
    /*
      start countdown
      enter number and format
      days, hours, minutes or seconds
    */
    countDownClock(20, 'days');
  }
  
  