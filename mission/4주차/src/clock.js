// 배터리 및 현재 시각
const currentTime = document.querySelector('.current-time');
const currentBattery = document.querySelector('.battery-text');
const clockElement = document.querySelector('.clock');
const powerOffButton = document.querySelector('.power-off-button');

const currentClock = () => {
  const date = new Date();
  const dateString = date.toLocaleString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hourCycle: 'h24',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const replacedDate = dateString.replace(/(\d{4})\. (\d{2})\. (\d{2})\./, '$1-$2-$3');
  return replacedDate;
};

const clock = setInterval(() => {
  currentTime.textContent = currentClock();
}, 1000);

let totalBattery = 100;
currentBattery.textContent = '100%';

const battery = setInterval(() => {
  totalBattery -= 1;
  currentBattery.textContent = `${totalBattery}%`;

  if (totalBattery === 0) {
    clearInterval(battery);
    clockElement.style.backgroundColor = '#111';

    clearInterval(clock);
    currentTime.textContent = '';
  }
}, 10000);

powerOffButton.addEventListener('click', () => {
  clearInterval(battery);
  currentBattery.textContent = '';

  clockElement.style.backgroundColor = '#111';
  clearInterval(clock);
  currentTime.textContent = '';
});

// 알람 추가 및 삭제
const alarmList = document.querySelector('.alarm-list');
const addButton = document.querySelector('.add-button');
const allDeleteButton = document.querySelector('.all-delete-button');
const alarmContainer = document.querySelector('.alarm-list-container');

const hourInput = document.getElementById('hour');
const minuteInput = document.getElementById('minute');
const secondInput = document.getElementById('second');

const createAlarm = (hour, minute, second) => {
  const alarm = document.createElement('div');
  alarm.classList.add('alarm');

  const alarmText = document.createElement('div');
  alarmText.classList.add('alarm-text');

  const noon = hour < 12 ? '오전' : '오후';

  const noonText = document.createElement('span');
  noonText.classList.add('alarm-noon');
  noonText.textContent = noon;

  const time = document.createElement('span');
  time.classList.add('alarm-time');
  time.textContent = `${hour}:${minute}:${second}`;

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-button');
  deleteButton.textContent = '삭제';

  deleteButton.addEventListener('click', () => {
    alarmList.removeChild(alarm);
  });

  alarmText.appendChild(noonText);
  alarmText.appendChild(time);
  alarm.appendChild(alarmText);
  alarm.appendChild(deleteButton);

  return alarm;
};

const isValidHour = (hour) => {
  return !isNaN(hour) && hour >= 0 && hour < 24;
};

const isValidMinute = (minute) => {
  return !isNaN(minute) && minute >= 0 && minute < 60;
};

const isValidSecond = (second) => {
  return !isNaN(second) && second >= 0 && second < 60;
};

const maxAlarm = 3;
let alarmCount = 0;

addButton.addEventListener('click', () => {
  if (alarmCount >= maxAlarm) {
    alert('알람 추가는 최대 3개까지만 가능합니다.');
    return;
  }

  const hour = hourInput.value.padStart(2, '0');
  const minute = minuteInput.value.padStart(2, '0');
  const second = secondInput.value.padStart(2, '0');

  if (!isValidHour(hour)) {
    alert('시 단위를 확인해 주세요! (0~23)');
    return;
  }

  if (!isValidMinute(minute)) {
    alert('분 단위를 확인해 주세요! (0~59)');
    return;
  }

  if (!isValidSecond(second)) {
    alert('초 단위를 확인해 주세요! (0~59)');
    return;
  }

  const newAlarm = createAlarm(hour, minute, second);

  alarmList.appendChild(newAlarm);

  hourInput.value = '';
  minuteInput.value = '';
  secondInput.value = '';

  alarmCount++;
});

allDeleteButton.addEventListener('click', () => {
  while (alarmList.firstChild) {
    alarmList.removeChild(alarmList.firstChild);
  }
  alarmCount = 0;
});
