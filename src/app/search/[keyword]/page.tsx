import AppShell from "@/components/layouts/AppShell/AppShell";
import { Suspense } from "react";
import MovieList from "@/components/Movies/MovieList";
import Header from "@/components/layouts/Header/Header";
import { Grid2, Skeleton } from "@mui/material";
// import { MovieType } from "@/components/Movies/MovieType";

// const fetchMoviesWithDelay = async (keyword: string) => {
//   const res = await fetch(
//     `http://localhost:5000/movies?title_like=${keyword}`,
//     { cache: "no-store" }
//   );
//   const movies = await res.json();

//   return movies.map(
//     (movie: MovieType, index: number) =>
//       new Promise(
//         (resolve) => setTimeout(() => resolve(movie), index * 200) // Delay 0.5 detik per item
//       )
//   );
// };

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

const MovieSkeleton = () => {
  return (
    <Grid2 container spacing={5} className="p-10">
      {[...Array(4)].map((_, index) => (
        <Grid2 size={3} key={index}>
          <Skeleton
            variant="rounded"
            animation="wave"
            height={500}
            width={350}
            sx={{ bgcolor: "grey.300" }}
          />
          <Skeleton height={50} sx={{ bgcolor: "grey.300" }} className="mt-2" />
        </Grid2>
      ))}
    </Grid2>
  );
};

const Search = async ({ params }: { params: { keyword: string } }) => {
  const { keyword } = await params;
  const decodedKeyword = decodeURI(keyword);

  return (
    <AppShell>
      <Header>Hasil Pencarian Untuk {decodedKeyword}</Header>
      <Suspense fallback={<MovieSkeleton />}>
        <MoviesWithStreaming keyword={decodedKeyword} />
      </Suspense>
    </AppShell>
  );
};

export default Search;
