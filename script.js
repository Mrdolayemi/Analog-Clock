const canvas = document.getElementById('clock');
const context = canvas.getContext('2d');
function setTime() {
  const clockRadius = canvas.width / 2;

  //The Background Circle
  context.beginPath();
  context.fillStyle = 'black';
  context.arc(250, clockRadius, clockRadius, 0, 2 * Math.PI);
  context.fill();
  context.beginPath();
  context.arc(250, clockRadius, 20, 0, 2 * Math.PI);
  context.fillStyle = 'white';
  context.fill();

  //The Numbers
  context.font = clockRadius / 10 + 'px arial';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  for (let i = 1; i <= 12; i++) {
    context.fillText(
      i,
      clockRadius + clockRadius * 0.9 * Math.sin((i * 2 * Math.PI) / 12),
      clockRadius - clockRadius * 0.9 * Math.cos((i * 2 * Math.PI) / 12)
    );
  }

  //Getting The Minute and Second.
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const fullHour = (hour % 12) + minute / 60 + second / 3600;
  const hoursAngle = (fullHour * 2 * Math.PI) / 12;
  const minutesAngle = (minute * 2 * Math.PI) / 60;
  const secondAngle = (second * 2 * Math.PI) / 60;

  // Moving the hours, Minute, and Second Hand

  //Moving Hours
  context.strokeStyle = 'white';
  context.moveTo(clockRadius, clockRadius);
  context.lineTo(
    clockRadius + clockRadius * 0.5 * Math.sin(hoursAngle),
    clockRadius - clockRadius * 0.5 * Math.cos(hoursAngle)
  );
  context.lineWidth = 6;
  context.stroke();

  //Moving Minute
  context.moveTo(clockRadius, clockRadius);
  context.lineTo(
    clockRadius + clockRadius * 0.7 * Math.sin(minutesAngle),
    clockRadius - clockRadius * 0.7 * Math.cos(minutesAngle)
  );
  context.strokeStyle = 'white';
  context.lineWidth = 4;
  context.stroke();

  //Moving Seconds
  context.moveTo(clockRadius, clockRadius);
  context.lineTo(
    clockRadius + clockRadius * 0.9 * Math.sin(secondAngle),
    clockRadius - clockRadius * 0.9 * Math.cos(secondAngle)
  );
  context.lineWidth = 2;
  context.stroke();
}
setInterval(setTime, 1000);

//Digital clock
let clock = () => {
  let date = new Date();
  let hrs = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let period = 'AM';
  if (hrs == 0) {
    hrs = 12;
  } else if (hrs >= 12) {
    hrs -= 12;
    period = 'PM';
  }
  hrs = hrs < 10 ? `0${hrs}` : `${hrs}`;
  mins = mins < 10 ? `0${mins}` : `${mins}`;
  secs = secs < 10 ? `0${secs}` : `${secs}`;
  let time = `${hrs}: ${mins}: ${secs}: ${period}`;
  document.querySelector('.clock').innerHTML = time;
  setTimeout(clock, 1000);
};
clock();

//Background
const btnLight = document.querySelector('.btn-light');
const btnDark = document.querySelector('.btn-dark');
const body = document.querySelector('body');
const btn = document.querySelector('button');

btnLight.addEventListener('click', () => {
  body.style.backgroundColor = 'white';
  btnDark.style.backgroundColor = 'white';
  btnLight.style.backgroundColor = 'white';
  btnLight.style.color = 'black';
  btnDark.style.color = 'black';
});

btnDark.addEventListener('click', () => {
  body.style.backgroundColor = 'black';
  btnDark.style.backgroundColor = 'black';
  btnLight.style.backgroundColor = 'black';
  btnLight.style.color = 'white';
  btnDark.style.color = 'white';
});
