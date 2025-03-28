let hourhand = document.querySelector(".hour");
let minutehand = document.querySelector(".minute");
let secondhand = document.querySelector(".second");

let updateTime = () => {
  let time = new Date();
  let secToDeg = time.getSeconds() * 6;
  secondhand.style.transform = `rotate(${secToDeg}deg)`;
  let minToDeg = time.getMinutes() * 6;
  minutehand.style.transform = `rotate(${minToDeg}deg)`;
  let hourToDeg = time.getHours() * 30 + time.getMinutes() / 2;
  console.log(hourToDeg);
  hourhand.style.transform = `rotate(${hourToDeg}deg)`;
};
updateTime();
setInterval(updateTime, 1000);
