const months = ["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","dec"];
const weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const date = new Date();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();
const week = date.getUTCDay();
const time = date.toLocaleTimeString();

document.querySelector(".box .info #date .week").innerHTML=weeks[week];
document.querySelector(".box .info #date .date").innerHTML=months[month]+" "+day+" "+year;
document.querySelector(".box .info #date .time").innerHTML=time;
// document.querySelector(".box .info .temp").innerHTML=time+"℃";
$("body").css("background-color", "yellow");
