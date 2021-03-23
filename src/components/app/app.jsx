import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import PrivateRoute from "../private-route/private-route";
import MainPage from "../main-page/main-page";
import Film from "../films/film";
import AddReviewScreen from "../review/add-review-screen";
import Login from "../login/login";
import MyList from "../my-list/mylist";
import Player from "../player/player";
import PageNotFound from "../404";
import {PROPS_COMMENT} from "../../prop-validation";
import {AppLinks} from "../../const";

const App = (props) => {
  const {reviews} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppLinks.MAIN}>
          <MainPage />
        </Route>
        <Route exact path={AppLinks.LOGIN}>
          <Login />
        </Route>
        <PrivateRoute exact path={AppLinks.MY_LIST}
          render={() => <MyList />}
        />
        <Route exact path={AppLinks.FILM}>
          <Film
            reviews={reviews}
          />
        </Route>
        <PrivateRoute exact path={AppLinks.REVIEW}
          render={() => <AddReviewScreen/>}
        />
        <Route exact path={AppLinks.PLAYER}>
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
