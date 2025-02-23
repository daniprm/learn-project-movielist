import AppShell from "@/components/layouts/AppShell/AppShell";
import { Suspense } from "react";
import MovieSkeleton from "@/components/Skeleton/MovieSkeleton";
import MovieDetailPage from "@/components/Movies/Detail/MovieDetailPage";

const MovieDetail = async ({ params }: { params: { movieId: string } }) => {
  const { movieId } = await params;

  const res = await fetch(`http://localhost:5000/movies/${movieId}`, {
    cache: "no-store",
  });
  const movie = await res.json();

  return (
    <AppShell>
      <Suspense fallback={<MovieSkeleton />}>
        <MovieDetailPage movie={movie} />
      </Suspense>
    </AppShell>
  );
};

export default MovieDetail;
