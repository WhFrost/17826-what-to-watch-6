import {films} from "../mock/films";
import {reviews} from "../mock/reviews";
import {ActionType} from "./action";
import {DEFAULT_GENRE} from "../const";

const genres = films.reduce((total, current) => {
  if (!total.some((item) => item === current.genre)) {
    total.push(current.genre);
  }
  return total;
}, [DEFAULT_GENRE]);

const initialState = {
  films,
  reviews,
  genres,
  currentGenre: DEFAULT_GENRE,
  filteredFilmsByGenre: films
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        currentGenre: action.payload
      };
    case ActionType.FILTER_FILMS_BY_GENRE:
      return {
        ...state,
        filteredFilmsByGenre:
        state.currentGenre === DEFAULT_GENRE
          ? films
          : films.filter((film) => film.genre === action.payload)
      };
    default:
      return state;
  }
};

export {
  reducer
};
