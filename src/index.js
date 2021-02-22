import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {GENRES, films} from "./mock/films";

ReactDOM.render(<App
  filters={GENRES}
  films={films}/>, document.querySelector(`#root`));
