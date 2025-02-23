import AppShell from "@/components/layouts/AppShell/AppShell";
import { Suspense } from "react";
import MovieDetailPage from "@/components/Movies/Detail/MovieDetailPage";
import { getMovie } from "@/app/movie/getMovie";
import Loading from "@/components/Loading/Loading";
const MovieContent = async ({ movieId }: { movieId: string }) => {
  const movie = await getMovie(movieId);
  return <MovieDetailPage movie={movie} />;
};

const MovieDetail = async ({ params }: { params: { movieId: string } }) => {
  const { movieId } = await params;

  return (
    <AppShell>
      <Suspense fallback={Loading()}>
        <MovieContent movieId={movieId} />
      </Suspense>
    </AppShell>
  );
};

export default MovieDetail;
