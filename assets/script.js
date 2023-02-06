// Displays current date in the Header element.
const currentDayDisplay = document.getElementById("current-day");
// Using this for displaying the current time.
const momentTester = document.getElementById('moment-test-element');

// This refreshes the page every second.
// Might not be the best way to do this! 
const liveTime = setInterval(function() {
    const currentSecond = moment().format('HH:mm:ss');
    const currentHour = parseInt(moment().format('HH'));

    // Updates every second with current time.
    momentTester.innerText = `${currentSecond}`;
}, 1000);

// Currently just making 3 o'clock green.
// Should do this by applying a class. 
function checkHour() {
    if (moment().format('HH') >= 15) {
        document.getElementById('hour14').style.backgroundColor = "Green";
    }
}

// Updates the date on page refresh.
currentDayDisplay.innerText = moment().format('dddd Do MMMM YYYY');

checkHour();
console.log(parseInt(moment().format('HH')) + 6)
