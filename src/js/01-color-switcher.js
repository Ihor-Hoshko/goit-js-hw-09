function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
timerId = null;
buttonStart.addEventListener('click', colorSwitch);
buttonStop.addEventListener('click', colorSwitchStop);

function colorSwitch() {
  timerId = setInterval(() => {
    document.body.style.background = getRandomHexColor();
  }, 1000);
  buttonStart.disabled = true;
}

function colorSwitchStop() {
  if (timerId) {
    clearInterval(timerId);
    buttonStart.disabled = false;
  }
}
