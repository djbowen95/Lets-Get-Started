// Displays current date in the Header element.
const currentDayDisplay = document.getElementById("current-day");
currentDayDisplay.innerText = moment().format('dddd Do MMMM YYYY');

// Using this for displaying the current time.
const momentTester = document.getElementById('moment-test-element');

// This refreshes the page every second.
// Might not be the best way to do this! 
const liveTime = setInterval(function() {
    const currentSecond = moment().format('HH:mm:ss');
    const currentHour = parseInt(moment().format('HH'));

    // Updates every second with current time.
    momentTester.innerText = `${currentSecond}`;

    // I'm not sure if I like this/might scrap it.
    if (currentHour < 9) {
        document.getElementById('prehours').style.backgroundColor = "Blue";
    } else if (currentHour > 17) {
        document.getElementById('after-hours').style.backgroundColor = "Blue";
    } else if (currentHour >= 9 && currentHour <= 17) {
        console.log(currentHour);
        document.getElementById(`hour${currentHour}`).style.backgroundColor = "Green";
        for (let i = 9; i > currentHour; i++) {
            document.getElementById(`hour${i}`).style.backgroundColor = "Grey";
        }
    } 
}, 1000);

/*
// while (moment().format('HH') <= 9)
*/
// Currently just making 3 o'clock green.
// Should do this by applying a class. 
function checkHour() {
    if (moment().format('HH') >= 15) {
        document.getElementById('hour15').style.backgroundColor = "Green";
    }
}


checkHour();
console.log(parseInt(moment().format('HH')) + 6)
