import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from "../main-page/main-page";
import Film from "../films/film";
import AddReview from "../films/review";
import Login from "../login/login";
import MyList from "../my-list/mylist";
import Player from "../player/player";
import PageNotFound from "../404";

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
          <Film />
        </Route>
        <Route exact path="/films/:id/review">
          <AddReview />
        </Route>
        <Route exact path="/player/:id">
          <Player />
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
  films: PropTypes.array.isRequired,
};

export default App;
