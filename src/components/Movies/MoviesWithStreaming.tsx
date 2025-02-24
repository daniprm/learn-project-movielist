"use client";

import React, { useEffect, useState } from "react";
import MovieList from "@/components/Movies/MovieList";

const MoviesWithStreaming = ({ keyword }: { keyword: string }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:5000/movies?${keyword}`, {
        cache: "no-store",
      });
      const movies = await res.json();
      await new Promise((resolve) => setTimeout(resolve, 500));

      setMovies(movies);
    };
    fetchData();
  }, [keyword]);

  return <MovieList movies={movies} />;
};

export default MoviesWithStreaming;
