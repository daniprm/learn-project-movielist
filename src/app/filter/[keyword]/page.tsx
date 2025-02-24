import AppShell from "@/components/layouts/AppShell/AppShell";
import { Suspense } from "react";
import Header from "@/components/layouts/Header/Header";
import Loading from "@/components/Loading/Loading";
import { getData } from "@/Utilities/Movies/getData";
import MovieList from "@/components/Movies/MovieList";

const MovieContent = async ({ keyword }: { keyword: string }) => {
  const query = `http://localhost:5000/movies?${keyword}`;
  const movies = await getData(query);
  return <MovieList movies={movies} />;
};

const Filter = async ({ params }: { params: { keyword: string } }) => {
  const { keyword } = await params;
  const decodedKeyword = decodeURIComponent(keyword);

  return (
    <AppShell>
      <Header>Hasil Filter</Header>
      <Suspense fallback={<Loading />}>
        <MovieContent keyword={decodedKeyword} />
      </Suspense>
    </AppShell>
  );
};

export default Filter;
