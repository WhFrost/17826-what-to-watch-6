const ActionType = {
  LOAD_FILMS: `data/loadFilms`,
  GET_PROMO_FILM: `data/getPromoFilm`,
  GET_GENRES: `data/getGenres`,
  CHANGE_GENRE: `genresList/changeGenre`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
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
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  getGenres: (films) => ({
    type: ActionType.GET_GENRES,
    payload: films,
  }),
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),

};

export {
  ActionType,
  ActionCreator
};
