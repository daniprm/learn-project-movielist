"use client";

import React, { useEffect, useState } from "react";
import MovieList from "@/components/Movies/MovieList";

const MoviesWithStreaming = ({ keyword }: { keyword: string }) => {
  const [movies, setMovies] = useState([]);
  // const movies = await fetchMoviesWithDelay(keyword);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `http://localhost:5000/movies?${keyword}&_page={2}&_limit={}`,
        {
          cache: "no-store",
        }
      );
      const movies = await res.json();

      setMovies(movies);
    };
    fetchData();
  }, [keyword]);

  return <MovieList movies={movies} />;
};

export default MoviesWithStreaming;
