const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const milliseconds = document.getElementById('milliseconds');
 
 
let stopIntervalId; //value to track interval
let nowDate; //to track time
let carry = 0; // carry over value needed while working with time
 
//updates the time in stopwatch
function updateTime() {
 
    milliseconds.innerText = formatTime(parseMilliseconds
    (parseInt(milliseconds.innerText)+1));
    secondsEl.innerText = formatTime(addTime(parseInt(secondsEl.innerText)+carry));
    minutesEl.innerText = formatTime(parseInt(minutesEl.innerText)+carry);
    hoursEl.innerText = formatTime(parseInt(hoursEl.innerText)+carry);
}
 
//parse lowest second interval we have to second 
function parseMilliseconds(time) {
    carry = 0;
    if(time > 99) {
        carry = 1;
        return 0;
    } else {
        return time;
    }
}
 
//update second, minutes and hours as it hits 60
function addTime(time) {
    carry = 0;
    if(time > 59) {
        carry = 1;
        return 0;
    } else {
        return time;
    }
}
 
//start the watch
function startWatch() {
     //this commented code is to fix the bug when you click start button multiple times
    /*if(stopIntervalId !== undefined) {
        clearInterval(stopIntervalId);
    }*/
    carry = 0;    
    nowDate = new Date();
    stopIntervalId = setInterval(updateTime, 10);
}
 
//pause the watch
function stopWatch() {
    clearInterval(stopIntervalId);
}
 
//reset watch to 00
function resetWatch() {
    carry = 0;
    clearInterval(stopIntervalId);
    milliseconds.innerText = "00";
    secondsEl.innerText = "00";
    minutesEl.innerText = "00";
    hoursEl.innerText = "00";
}
 
 
//format time to look better even there is one digit
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
