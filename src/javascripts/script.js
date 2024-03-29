let upcoming_events_container=document.querySelector(".upcoming-events-container");
let past_events_container=document.querySelector(".past-events-container");
let upcoming_event="";
let past_event="";

function events(){
    fetch("/events.json")
    .then(response=>response.json())
    .then(data=>{
        const upcoming_events=data.upcoming_events;
        upcoming_events.forEach(event => {

            upcoming_event+=`
            <div class="event h-[500px] w-fit flex flex-col items-center justify-evenly p-8 ">
                    <div class="image h-[200px] w-[200px] bg-white rounded-full border-2 border-white overflow-hidden">
                        <img src=${event.image} alt="" id="event-image" class="h-full w-full">
                    </div>
                    <span class="text-xl">${event.date}</span>
                    <span class="text-3xl">${event.name}</span>
                    <span class="text-2xl text-center">${event.venue}</span>
                    <button class="px-6 py-3 border-2 bg-white text-black rounded-full text-lg hover:bg-black hover:text-white hover:border-white duration-200">know more</button>
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
  