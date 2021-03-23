import {reviews} from "../mock/reviews";
import {ActionType} from "./action";
import {
  DEFAULT_GENRE,
  INIT_QUANTITY_FILMS_TO_SHOW,
  INC_QUANTITY_FILMS_TO_SHOW,
  AuthorizationStatus
} from "../const";

const initialState = {
  promoFilm: null,
  films: [],
  reviews,
  genres: [],
  currentGenre: DEFAULT_GENRE,
  initQuantityFilmsToShow: INIT_QUANTITY_FILMS_TO_SHOW,
  incQuantityFilmsToShow: INC_QUANTITY_FILMS_TO_SHOW,
  authorizationStatus: AuthorizationStatus.WAITING_AUTH,
  isDataLoaded: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return {
        ...state,
        films: action.payload,
        isDataLoaded: true,
      };
    case ActionType.GET_PROMO_FILM:
      return {
        ...state,
        promoFilm: action.payload,
      };
    case ActionType.GET_GENRES:
      return {
        ...state,
        genres: [DEFAULT_GENRE, ...new Set(action.payload.reduce((total, current) => {
          total.push(current.genre);
          return total;
        }, []))],
      };
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        currentGenre: action.payload
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    default:
      return state;
  }
};

export {
  reducer
};
