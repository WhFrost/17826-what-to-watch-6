const ActionType = {
  LOAD_FILMS: `data/loadFilms`,
  GET_PROMO_FILM: `data/getPromoFilm`,
  GET_GENRES: `data/getGenres`,
  CHANGE_GENRE: `genresList/changeGenre`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  SET_LOGIN_ERROR: `user/loginError`,
  REDIRECT_TO_ROUTE: `user/redirectToRoute`,
  GET_FILM: `data/getFilm`,
  GET_REVIEWS: `data/getReviews`,
  CLEAR_DATA: `film/clear`
};

const ActionCreator = {
  fetchFilmsList: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),
  getPromoFilm: (promoFilm) => ({
    type: ActionType.GET_PROMO_FILM,
    payload: promoFilm,
  }),
  getGenres: (films) => ({
    type: ActionType.GET_GENRES,
    payload: films,
  }),
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  setLoginError: () => ({
    type: ActionType.SET_LOGIN_ERROR,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  getFilm: (film) => ({
    type: ActionType.GET_FILM,
    payload: film,
  }),
  getReviews: (reviews) => ({
    type: ActionType.GET_REVIEWS,
    payload: reviews,
  }),
  clearData: () => ({
    type: ActionType.CLEAR_DATA
  })
};

export {
  ActionType,
  ActionCreator
};
