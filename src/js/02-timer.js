// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';

let selectedDate = 0;
let timerId = 0;

const buttonStart = document.querySelector('button[data-start]');
const timeInput = document.querySelector('#datetime-picker');
const dataDays = document.querySelector('.timer [data-days]');
const dataHours = document.querySelector('.timer [data-hours]');
const dataMinutes = document.querySelector('.timer [data-minutes]');
const dataSeconds = document.querySelector('.timer [data-seconds]');

buttonStart.addEventListener('click', onButtonStart);
buttonStart.setAttribute('disabled', 'disabled');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0].getTime();
    if (selectedDate < new Date()) {
      window.alert('Please choose a date in the future');
    } else {
      buttonStart.removeAttribute('disabled');
      console.log(selectedDates);
    }
  },
};

flatpickr(timeInput, options);

function onButtonStart() {
  timerId = setInterval(() => {
    const targetDate = selectedDate - new Date();
    buttonStart.setAttribute('disabled', 'disabled');
    timeInput.setAttribute('disabled', 'disabled');
    stopTimer(targetDate);
    const convertObject = convertMs(targetDate);
    showDate(convertObject);
    //
  }, 1000);
}

function stopTimer(targetDates) {
  if (targetDates <= 1000) {
    clearInterval(timerId);
    timeInput.removeAttribute('disabled');
  }
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function showDate(time) {
  dataDays.textContent = addLeadingZero(time.days);
  dataHours.textContent = addLeadingZero(time.hours);
  dataMinutes.textContent = addLeadingZero(time.minutes);
  dataSeconds.textContent = addLeadingZero(time.seconds);
}

function addLeadingZero(value) {
  return String(value).padStart(2, 0);
}
