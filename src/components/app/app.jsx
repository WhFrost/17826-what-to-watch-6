import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import PrivateRoute from "../private-route/private-route";
import MainPage from "../main-page/main-page";
import FilmScreen from "../films/film-screen";
import AddReviewScreen from "../review/add-review-screen";
import Login from "../login/login";
import MyList from "../my-list/mylist";
import Player from "../player/player";
import PageNotFound from "../404";
import {PROPS_COMMENT} from "../../prop-validation";
import {AppRoute} from "../../const";
import browserHistory from "../../browser-history";

const App = (props) => {
  const {reviews} = props;
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainPage />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <Login />
        </Route>
        <PrivateRoute exact path={AppRoute.MY_LIST}
          render={() => <MyList />}
        />
        <Route exact path={`${AppRoute.FILMS}/:id`}
          render={({match}) => (
            <FilmScreen
              id={Number(match.params.id)}
            />
          )}
        >
          <FilmScreen
            reviews={reviews}
          />
        </Route>
        <PrivateRoute exact path={AppRoute.REVIEW}
          render={() => <AddReviewScreen/>}
        />
        <Route exact path={AppRoute.PLAYER}>
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
