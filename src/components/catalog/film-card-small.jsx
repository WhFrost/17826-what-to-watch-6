import React, {useEffect, useState, useRef} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {PROPS_FILM} from "../../prop-validation";
import PlayerPreview from "../player/player-preview";

const FilmCardSmall = (props) => {
  const {film} = props;
  const {id, name, posterImage, previewImage, previewVideoLink} = film;
  const [startPlayer, setStartPlayer] = useState(false);

  const timeRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeRef.current !== null) {
        clearTimeout(timeRef.current);
      }
    };
  });

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => {
        timeRef.current = setTimeout(() => setStartPlayer(true), 1000);
      }}
      onMouseLeave={() => {
        clearTimeout(timeRef.current);
        timeRef.current = null;
        setStartPlayer(false);
      }}
    >
      <div className="small-movie-card__image">
        {
          startPlayer
            ? <PlayerPreview
              previewVideoLink={previewVideoLink}
              previewImage={previewImage}
            />
            : <img src={posterImage} alt={name} width="280" height="175"/>
        }
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link"
          to={`/films/${id}`}
          onClick={() => setStartPlayer(false)}
        >{name}</Link>
      </h3>
    </article>
  );
};

FilmCardSmall.propTypes = {
  film: PropTypes.shape(PROPS_FILM)
};

export default FilmCardSmall;
