import {films} from "../mock/films";
import {reviews} from "../mock/reviews";
import {ActionType} from "./action";
import {
  DEFAULT_GENRE,
  INIT_QUANTITY_FILMS_TO_SHOW,
  INC_QUANTITY_FILMS_TO_SHOW
} from "../const";

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
  filteredFilmsByGenre: films,
  initQuantityFilmsToShow: INIT_QUANTITY_FILMS_TO_SHOW,
  incQuantityFilmsToShow: INC_QUANTITY_FILMS_TO_SHOW
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        currentGenre: action.payload
      };
    default:
      return state;
  }
};

export {
  reducer
};
