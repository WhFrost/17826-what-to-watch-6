import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {GENRES, films} from "./mock/films";
import {RATING} from "./mock/reviews";

ReactDOM.render(<App
  filters={GENRES}
  films={films}
  rating={RATING}/>, document.querySelector(`#root`));
