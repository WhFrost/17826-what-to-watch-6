import {nanoid} from "nanoid";
import {getRandomInteger, getRandomItem} from "../common";
import {DESCRIPTION, DIRECTORS} from "./films";

const RATING = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const COUNT_REVIEWS = 10;

const getDescription = () => {
  return getRandomItem(DESCRIPTION);
};

const getReview = () => {
  const randomDescription = new Array(getRandomInteger(1, DESCRIPTION.length)).fill().map(getDescription);
  return {
    id: nanoid(),
    user: {
      id: nanoid(),
      name: getRandomItem(DIRECTORS)
    },
    rating: getRandomInteger(1, 100) / 10,
    comment: randomDescription,
    date: Date(),
  };
};
const reviews = new Array(COUNT_REVIEWS).fill().map(getReview);

export {
  RATING,
  reviews
};
