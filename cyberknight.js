// Function to update the countdown
function updateCountdown() {
    const eventDate = new Date("2024-04-01T23:59:59"); // Set the upcoming date and time here
    const currentDate = new Date();

    const totalSeconds = (eventDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    document.querySelector(".clock-day").innerText = 0;
    document.querySelector(".clock-hours").innerText = formatTime(hours);
    document.querySelector(".clock-minutes").innerText = formatTime(minutes);
    document.querySelector(".clock-seconds").innerText = formatTime(seconds);
}

// Function to add leading zero to single-digit numbers
function formatTime(time) {
    return time ? `0${0}` : time;
}

// Initial call to update countdown
updateCountdown();

// Update countdown every second
setInterval(updateCountdown, 1000);

VanillaTilt.init(document.querySelector(".glassmorphic-card"), {
    max: 15,
    speed: 200,
    glare: true,
    "max-glare": 1,
});

let speakers_temp = "";
let speakers_container = document.querySelector(".speakers-container");

function speakers() {
    fetch("./speakers.json")
        .then((response) => response.json())
        .then((data) => {
            const allspeakers = data.speakers;
            allspeakers.forEach((speaker) => {
                speakers_temp += `
                    <div class="w-[80vw] h-[60vh] flex justify-around max-[700px]:flex-col gap-4">
                        <div class="img bg-contain w-[40%] h-[98%] max-[700px]:w-full">
                            <img src=${speaker.image} alt="" class=" aspect-square h-full w-full  max-[700px]:grayscale-0 transition-all">
                        </div>
                        <div class="details flex flex-col justify-center h-[70%] gap-4">
                            <h2 class="text-3xl font-bold text-center">${speaker.name}</h2>
                            <span class="text-center">${speaker.post}</span>
                            <div class="socials">
                                <div class="flex items-center justify-center gap-4 md:gap-4 lg:ml-auto">
                                    <a class="border-[1px] border-white rounded-full p-2 hover:bg-gray-500 dark:hover:bg-gray-800 flex justify-center items-center flex-col h-14 w-14" href="${speaker.twitter}" rel="ugc">
                                        <i class="ri-twitter-x-line text-2xl "></i>
                                    </a>
                                    <a class=" border-[1px] border-white rounded-full p-2 hover:bg-gray-500 dark:hover:bg-gray-800 flex justify-center items-center flex-col h-14 w-14" href="${speaker.linkedin}" rel="ugc">
                                        <i class="ri-linkedin-fill text-2xl "></i>
                                    </a>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            });
            speakers_container.innerHTML = speakers_temp;
        });
}

speakers();

