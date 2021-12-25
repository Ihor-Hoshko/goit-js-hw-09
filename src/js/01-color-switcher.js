function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const buttonStart = document.querySelector('button[data - start]');
const buttonStop = document.querySelector('button[data - stop]');
