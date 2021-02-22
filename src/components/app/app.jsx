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
import {PROPS_FILM} from "../../prop-validation";

const App = (props) => {
  const {filters, films} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage
            filters={filters}
            films={films}/>
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/mylist">
          <MyList
            films={films}
          />
        </Route>
        <Route exact path="/films/:id">
          <Film
            films={films}
          />
        </Route>
        <Route exact path="/films/:id/review">
          <AddReviewScreen
            films={films}
          />
        </Route>
        <Route exact path="/player/:id">
          <Player
            films={films}
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
  filters: PropTypes.array.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape(PROPS_FILM)).isRequired,
};

export default App;
