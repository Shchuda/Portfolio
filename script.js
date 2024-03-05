// Gets the clock elements
var hoursElement = document.getElementById('hours');
var minutesElement = document.getElementById('min');

// Function to update the clock
function updateClock() {
    // Gets the current time
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();

    // Pads single digit numbers with a leading zero
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    // Updates the clock display
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
}

// Updates the clock every second
setInterval(updateClock, 1000);

// Updates the clock immediately on page load
updateClock();

// Calendar //
// Gets references to HTML elements
const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

// Gets today's date
const today = new Date();

// Array of week days and months
const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Sets innerHTML of date, day, month, and year elements to display today's date
date.innerHTML = (today.getDate() < 10 ? "0" : "") + today.getDate(); // Adds a leading zero if date is single digit
day.innerHTML = weekDays[today.getDay()]; // Displays the day of the week
month.innerHTML = allMonths[today.getMonth()]; // Displays the month
year.innerHTML = today.getFullYear(); // Displays the year


