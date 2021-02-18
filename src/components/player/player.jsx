import React from "react";
import PropTypes from "prop-types";
import {useHistory, useParams} from "react-router-dom";

const Player = (props) => {
  const {films} = props;
  const history = useHistory();
  const {id} = useParams();
  const currentFilm = films.find((film) => film.id === id);
  const {name, videoLink, runtime} = currentFilm;
  return (
    <div className="player">
      <video src={videoLink} className="player__video" poster="img/player-poster.jpg"></video>

      <button
        type="button"
        className="player__exit"
        onClick={() => history.push(`/films/${id}`)}
      >
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: `30%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{runtime}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{name}</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  films: PropTypes.array.isRequired,
};

export default Player;
