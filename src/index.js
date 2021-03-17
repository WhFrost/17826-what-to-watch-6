import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./components/app/app";
import {films} from "./mock/films";
import {reviews} from "./mock/reviews";
import {reducer} from "./store/reducer";
import {composeWithDevTools} from "redux-devtools-extension";

const store = createStore(
    reducer,
    composeWithDevTools()
);

ReactDOM.render(
    <Provider store={store}>
      <App
        films={films} reviews={reviews}
      />
    </Provider>,
    document.querySelector(`#root`));
