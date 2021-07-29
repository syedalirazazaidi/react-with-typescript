import React, { useState, useEffect } from "react";
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
import { useHomeFetch } from "../hooks/useHomeFetch";
import NoImage from "../images/no_image.jpg";
import HeroImage from "./HeroImage/index";

import Grid from "./Grid/index";
import Thumb from "./Thumb";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
const Home = () => {
  const { state, loading, error, setSearchTerm } = useHomeFetch();

  return (
    <>
      {state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid header="Popular Movies">
        {state.results?.map((movie) => (
          <Thumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
          />
        ))}
        <Spinner />
      </Grid>
    </>
  );
};

export default Home;
