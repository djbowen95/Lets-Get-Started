const currentDayDisplay = document.getElementById("current-day");

// Function to write date in header.
function writeDate () {
    currentDayDisplay.innerText = moment().format('dddd Do MMMM YYYY');
}

writeDate();