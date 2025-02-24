import AppShell from "@/components/layouts/AppShell/AppShell";
import { Suspense } from "react";
import MovieList from "@/components/Movies/MovieList";
import Header from "@/components/layouts/Header/Header";
import Loading from "@/components/Loading/Loading";

const MoviesWithStreaming = async ({ keyword }: { keyword: string }) => {
  // const movies = await fetchMoviesWithDelay(keyword);

  const res = await fetch(
    `http://localhost:5000/movies?title_like=${keyword}`,
    {
      cache: "no-store",
    }
  );
  const movies = await res.json();

  return <MovieList movies={await Promise.all(movies)} />;
};

const Search = async ({ params }: { params: { keyword: string } }) => {
  const { keyword } = await params;
  const decodedKeyword = decodeURI(keyword);

  return (
    <AppShell>
      <Header>Hasil Pencarian Untuk {decodedKeyword}</Header>
      <Suspense fallback={<Loading />}>
        <MoviesWithStreaming keyword={decodedKeyword} />
      </Suspense>
    </AppShell>
  );
};

export default Search;
