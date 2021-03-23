import {ActionCreator} from "./action";
import {AuthorizationStatus} from "../const";
import {adaptFilmFromServer} from "../common";
const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => data.map((film) => adaptFilmFromServer(film)))
    .then((films) => dispatch(ActionCreator.fetchFilmsList(films)))
    .catch(() => {})
);

const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(`/films/promo`)
    .then(({data}) => adaptFilmFromServer(data))
    .then((promoFilm) => dispatch(ActionCreator.getPromoFilm(promoFilm)))
    .catch(() => {})
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

const logout = () => (next, _getState, api) => (
  api.get(`/logout`)
    .then(() => next(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)))
    .catch(() => {})
);

export {
  fetchFilmsList,
  fetchPromoFilm,
  checkAuth,
  login,
  logout
};
