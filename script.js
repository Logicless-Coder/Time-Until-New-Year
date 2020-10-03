const nextYear = new Date().getFullYear() + 1;
const targetDate = "1 Jan " + nextYear;
const daysValue = document.getElementById("days");
const hoursValue = document.getElementById("hours");
const minutesValue = document.getElementById("minutes");
const secondsValue = document.getElementById("seconds");

function setValues() {
  var difference = new Date(targetDate) - new Date();
  const days = Math.round(difference / 1000 / 60 / 60 / 24);
  const hours = Math.round((difference / 1000 / 60 / 60) % 24) - 1;
  const minutes = Math.round((difference / 1000 / 60) % 60) - 1;
  const seconds = Math.round((difference / 1000) % 60) - 1;

  daysValue.firstElementChild.textContent = days;
  hoursValue.firstElementChild.textContent = hours;
  minutesValue.firstElementChild.textContent = minutes;
  secondsValue.firstElementChild.textContent = seconds;
}

setInterval(setValues, 1000);
