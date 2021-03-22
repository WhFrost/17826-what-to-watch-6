import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from "../main-page/main-page";
import Film from "../films/film";
import AddReviewScreen from "../review/add-review-screen";
import Login from "../login/login";
import MyList from "../my-list/mylist";
import Player from "../player/player";
import PageNotFound from "../404";
import {PROPS_FILM, PROPS_COMMENT} from "../../prop-validation";

const App = (props) => {
  const {reviews} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/mylist">
          <MyList
          />
        </Route>
        <Route exact path="/films/:id">
          <Film
          />
        </Route>
        <Route exact path="/films/:id/review">
          <AddReviewScreen
          />
        </Route>
        <Route exact path="/player/:id">
          <Player
          />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape(PROPS_COMMENT)).isRequired,
};

export default App;
