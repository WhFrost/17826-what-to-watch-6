const COUNT_FILMS = 5;
const INIT_QUANTITY_FILMS_TO_SHOW = 8;
const INC_QUANTITY_FILMS_TO_SHOW = 8;
const MAX_STARS = 5;

const FilmTab = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

const DEFAULT_GENRE = `All genres`;

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
  WAITING_AUTH: `WAITING_AUTH`,
};

const AppRoute = {
  ROOT: `/`,
  LOGIN: `/login`,
  MY_LIST: `/mylist`,
  FILMS: `/films`,
  REVIEW: `/films/:id/review`,
  PLAYER: `/player/:id`,
};

const APIRoute = {
  FILMS: `/films`,
  PROMO: `/films/promo`,
  COMMENTS: `/comments`,
  LOGIN: `/login`,
  ERROR: `/error`
};

const LOGIN_ERROR_MESSAGE = `Login/Password incorrected. Please try again.`;

export {
  COUNT_FILMS,
  INIT_QUANTITY_FILMS_TO_SHOW,
  INC_QUANTITY_FILMS_TO_SHOW,
  MAX_STARS,
  FilmTab,
  DEFAULT_GENRE,
  AuthorizationStatus,
  AppRoute,
  APIRoute,
  LOGIN_ERROR_MESSAGE
};
