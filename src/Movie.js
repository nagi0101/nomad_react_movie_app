import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ year, title, summary, poster, genres, index }) {
  return (
    <div
      className="movie"
      data-aos={index > 3 ? "fade-up" : ""}
      data-aos-anchor-placement={
        index > 3 && index % 2 === 0 ? "center-bottom" : "bottom-bottom"
      }
    >
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="genres">
          {genres.map((genre, index) => (
            <li className="genre" key={index}>
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie__summary">{summary.slice(0, 180)}...</p>
      </div>
    </div>
  );
}
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  index: PropTypes.number,
};

export default Movie;
