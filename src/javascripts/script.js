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
                    <button class="px-6 py-3 bg-white text-black rounded-full text-lg">know more</button>
                </div>
            `

            upcoming_events_container?upcoming_events_container.innerHTML=upcoming_event:"";


        });
        const past_events=data.past_events;
        past_events.forEach(event => {
            past_event+=`
<<<<<<< HEAD
            <div class="swiper-slide event h-[550px] w-fit flex flex-col items-center justify-evenly p-8">
                    <div class="image h-[250px] w-[400px] bg-white border-4 border-zinc-800 overflow-hidden max-[700px]:w-[300px]">
=======

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