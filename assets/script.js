// Displays current date in the Header element.
const currentDayDisplay = document.getElementById("current-day");
// Using this for displaying the current time.
const momentTester = document.getElementById("moment-test-element");

// This refreshes the page every second.
// Might not be the best way to do this!
const liveTime = setInterval(function () {
  const currentSecond = moment().format("HH:mm:ss");
  const currentHour = parseInt(moment().format("HH"));

  // Updates every second with current time.
  momentTester.innerText = `${currentSecond}`;
  setTimeblockBackgrounds(getHour());
}, 1000);

// Should do this by applying a class.
// Must be called last.
function setCurrentHourBackground(hour) {
  document.getElementById(`tb-hour-${hour}`).style.backgroundColor = "Green";
}

function setPastHourBackground(hour) {
  for (let i = 9; i <= hour; i++) {
    document.getElementById(`tb-hour-${i}`).style.backgroundColor = "Red";
  }
}

function setUpcomingHourBackground(hour) {
  for (let i = 17; i >= hour; i--) {
    document.getElementById(`tb-hour-${i}`).style.backgroundColor = "Orange";
  }
}

function setTimeblockBackgrounds(hour) {
  setUpcomingHourBackground(hour);
  setPastHourBackground(hour);
  setCurrentHourBackground(hour);
}

function getHour() {
    let currentHour = moment().format("HH");
    let intHour = parseInt(currentHour) - 7; // Minus 7 to test for now.
    return intHour;
}
// Updates the date on page refresh.
currentDayDisplay.innerText = moment().format("dddd Do MMMM YYYY");

getHour();
setTimeblockBackgrounds(getHour());