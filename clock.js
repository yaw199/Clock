// Selector//

const hourTick = document.querySelector(".hour");
const minuteTick = document.querySelector(".minute");
const secondsTick = document.querySelector(".seconds");
const dateString = document.querySelector(".date-string");
const timeDisplay = document.querySelector(".time-display");
// Date constructor for Time//
setInterval(clockTick, 1000);
setInterval(digitaClock,100);



 function clockTick (){
     let currentTime = new Date();
     let hourTime = currentTime.getHours() / 12;
     let minuteTime = currentTime.getMinutes() / 60;
     let secondsTime = currentTime.getSeconds() / 60;

     hourTick.style.transform = "rotate(" + (hourTime * 360) + "deg)";
     minuteTick.style.transform = "rotate(" + (minuteTime * 360) + "deg)";
     secondsTick.style.transform = "rotate(" + (secondsTime*360) + "deg)";
 }


 function digitaClock(){
     let currentDate = new Date();
     let time = currentDate.toLocaleString('en-US', {hour:"numeric", minute:"numeric", hour12:true})
     let date = currentDate.toDateString();

     dateString.innerText=date;
     timeDisplay.innerText = time;
 }
 
 clockTick();
 digitaClock();

 