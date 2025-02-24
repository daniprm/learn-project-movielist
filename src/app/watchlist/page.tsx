import AppShell from "@/components/layouts/AppShell/AppShell";
import MovieList from "@/components/Movies/MovieList";
import { MovieType } from "@/types/Movie/MovieType";
import Header from "@/components/layouts/Header/Header";
import { getData } from "@/Utilities/Movies/getData";

interface WatchlistType {
  id: string;
}

const Watchlist = async () => {
  const movies = await getData("http://localhost:5000/movies");

  const watchlist = await getData("http://localhost:5000/watchlist");

  const watched = await getData("http://localhost:5000/watched");

  const watchlistMovies = movies.filter((movie: MovieType) => {
    return watchlist.some((item: WatchlistType) => item.id === movie.id);
  });

  const watchedMovies = movies.filter((movie: MovieType) => {
    return watched.some((item: WatchlistType) => item.id === movie.id);
  });

  return (
    <>
      <AppShell>
        <Header>Watchlist</Header>
        <MovieList movies={watchlistMovies} />
        <Header>Watched</Header>
        <MovieList movies={watchedMovies} />
      </AppShell>
    </>
  );
};

export default Watchlist;
