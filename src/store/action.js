const ActionType = {
  CHANGE_GENRE: `genresList/changeGenre`,
  FILTER_FILMS_BY_GENRE: `filmsList/filterFilms`,
  LOAD_FILMS: `data/loadFilms`,
  GET_GENRES: `data/getGenres`
};

const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre
  }),
  filterFilmsByGenre: (genre) => ({
    type: ActionType.FILTER_FILMS_BY_GENRE,
    payload: genre
  }),
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films
  }),
  getGenres: (films) => ({
    type: ActionType.GET_GENRES,
    payload: films
  }),
};

export {
  ActionType,
  ActionCreator
};
