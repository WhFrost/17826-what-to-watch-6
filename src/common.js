import dayjs from "dayjs";

const getRandomInteger = (min, max) => {
  return min + Math.floor(Math.random() * (max + 1 - min));
};

const getRandomItem = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const humanizeDate = (format, date) => {
  return dayjs(date).format(format);
};

export {
  getRandomInteger,
  getRandomItem,
  humanizeDate
};
