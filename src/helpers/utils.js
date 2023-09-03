import dayjs from 'dayjs';
// import duration from 'dayjs/plugin/duration';
// import relativeTime from 'dayjs/plugin/relativeTime';

// 30M
// dayjs.extend(duration);
// dayjs.extend(relativeTime);
/* ---- RANDOM ELEMENTS ---- */
const getRandomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];

/* ---- DATES AND TIME ---- */
function getDateTimeFullText(date) {
  return date ? dayjs(date).format('YYYY-MM-DDTHH:mm') : '';
}

function getDateTimeShortText(date) {
  return date ? dayjs(date).format('YYYY-MM-DD') : '';
}

function getDateMonthText(date) {
  return date ? dayjs(date).format('MMM DD') : '';
}

function getTimeText(date) {
  return date ? dayjs(date).format('hh:mm') : ''; // HH ????
}

function getDuration(dateStart, dateEnd) {
  let minutes = 0;
  let hours = 0;
  let days = 0;

  minutes = ((new Date(dateEnd).getTime()) - (new Date(dateStart).getTime())) / (1000 * 60);

  if (minutes >= 60) {
    hours = Math.floor(minutes / 60);
    minutes = Math.floor(minutes % 60);
  }

  if (hours > 23) {
    days = Math.floor(hours / 24);
    hours = Math.floor(hours % 24);
  }

  return { minutes, hours, days };
}

// function isDateExpired(date) {
//   return date && dayjs().isAfter(date, 'D');
// }

export {
  getRandomInteger,
  getRandomArrayElement,
  // isDateExpired,
  getDateTimeFullText,
  getDateTimeShortText,
  getDateMonthText,
  getTimeText,
  getDuration,
};
