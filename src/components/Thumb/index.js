import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// Styles
import { Image } from "./Thumb.styles";

const Thumb = ({ image, movieId, clickable }) => (
  <div>
    <Image src={image} alt="movie-thumb" />
    {/* {clickable ? (
      <Link to={`/${movieId}`}>
      </Link>
    ) : (
      <Image src={image} alt="movie-thumb" />
    )} */}
  </div>
);

Thumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool,
};

export default Thumb;
