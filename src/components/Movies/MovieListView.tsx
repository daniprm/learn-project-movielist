"use client";
import AppPagination from "../../Utilities/Pagination/Pagination";
import { MovieType } from "@/types/Movie/MovieType";
import { useEffect, useState } from "react";
import MovieList from "./MovieList";
import MovieSkeleton from "../Skeleton/MovieSkeleton";
import { getData } from "@/Utilities/Movies/getData";

const MovieListView = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<MovieType[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const movies: MovieType[] = await getData(
          `http://localhost:5000/movies?_page=${page}&_limit=${4}`
        );
        setMovies(movies);
      } catch (error) {
        console.error("Failed to fetch movies", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [page]);

  return (
    <>
      {isLoading ? (
        <MovieSkeleton />
      ) : (
        <>
          <MovieList movies={movies!} />

          <AppPagination page={page} setPage={setPage} totalPages={24} />
        </>
      )}
    </>
  );
};

export default MovieListView;
