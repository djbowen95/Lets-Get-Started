const currentDayDisplay = document.getElementById("current-day");
currentDayDisplay.innerText = moment().format('dddd Do MMMM YYYY');

const momentTester = document.getElementById('moment-test-element');

const liveTime = setInterval(function() {
    const currentSecond = moment().format('h:mm:ss a');
    momentTester.innerText = `${currentSecond}`
}, 1000);