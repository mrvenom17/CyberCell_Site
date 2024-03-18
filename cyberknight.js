// Function to update the countdown
function updateCountdown() {
    const eventDate = new Date("2024-03-29T23:59:59"); // Set the upcoming date and time here
    const currentDate = new Date();

    const totalSeconds = (eventDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    document.querySelector(".clock-day").innerText = days;
    document.querySelector(".clock-hours").innerText = formatTime(hours);
    document.querySelector(".clock-minutes").innerText = formatTime(minutes);
    document.querySelector(".clock-seconds").innerText = formatTime(seconds);
}

// Function to add leading zero to single-digit numbers
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Initial call to update countdown
updateCountdown();

// Update countdown every second
setInterval(updateCountdown, 1000);
