import AppShell from "@/components/layouts/AppShell/AppShell";
import MovieList from "@/components/Movies/MovieList";
import { MovieType } from "@/components/Movies/MovieType";
import Header from "@/components/layouts/Header/Header";

interface WatchlistType {
  id: string;
}

const Watchlist = async () => {
  const resMovies = await fetch("http://localhost:5000/movies");
  const movies = await resMovies.json();

  const resWatchlist = await fetch("http://localhost:5000/watchlist");
  const watchlist: WatchlistType[] = await resWatchlist.json();

  const watchlistMovies = movies.filter((movie: MovieType) => {
    return watchlist.some((item: WatchlistType) => item.id === movie.id);
  });

  return (
    <>
      <AppShell>
        <Header>Watchlist</Header>
        <MovieList movies={watchlistMovies} />
      </AppShell>
    </>
  );
};

export default Watchlist;
