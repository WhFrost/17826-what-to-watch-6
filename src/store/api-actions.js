import {ActionCreator} from "./action";
import {AuthorizationStatus, AppRoute, APIRoute} from "../const";
import {adaptFilmFromServer} from "../common";

const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => data.map((film) => adaptFilmFromServer(film)))
    .then((films) => dispatch(ActionCreator.fetchFilmsList(films)))
    .catch(() => {})
);

const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO)
    .then(({data}) => adaptFilmFromServer(data))
    .then((promoFilm) => dispatch(ActionCreator.getPromoFilm(promoFilm)))
    .catch(() => {})
);

const fetchFilm = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FILMS}/${id}`)
    .then(({data}) => adaptFilmFromServer(data))
    .then((activeFilm) => dispatch(ActionCreator.getFilm(activeFilm)))
    .catch(() => {})
);

const fetchReviewsList = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${id}`)
    .then(({data}) => dispatch(ActionCreator.getReviews(data)))
    .catch(() => {})
);

const addReview = (id, rating, comment) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}/${id}`, rating, comment)
    .then(({data}) => dispatch(ActionCreator.getReviews(data)))
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
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.ROOT)))
    .catch(() => {
      dispatch(ActionCreator.setLoginError());
      dispatch(ActionCreator.redirectToRoute(AppRoute.LOGIN));
    })
);

const logout = () => (next, _getState, api) => (
  api.get(`/logout`)
    .then(() => next(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)))
    .catch(() => {})
);

export {
  fetchFilmsList,
  fetchPromoFilm,
  fetchFilm,
  fetchReviewsList,
  addReview,
  checkAuth,
  login,
  logout
};
