const ActionType = {
  CHANGE_GENRE: `genresList/changeGenre`,
  FILTER_FILMS_BY_GENRE: `filmsList/filterFilms`
};

const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre
  }),
  filterFilmsByGenre: (genre) => ({
    type: ActionType.FILTER_FILMS_BY_GENRE,
    payload: genre
  })
};

export {
  ActionType,
  ActionCreator
};
