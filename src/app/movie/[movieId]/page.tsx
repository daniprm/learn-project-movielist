import AppShell from "@/components/layouts/AppShell/AppShell";
import { Suspense } from "react";
import MovieDetailPage from "@/components/Movies/Detail/MovieDetailPage";
import Loading from "@/components/Loading/Loading";
import { getData } from "@/Utilities/Movies/getData";
import CommentBox from "@/components/Comment/CommentBox";
const CommentsContent = async ({ movieId }: { movieId: string }) => {
  const query = `http://localhost:5000/comments?movieId=${movieId}`;
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const commentsData = await getData(query);
  return <CommentBox movieId={movieId} commentsData={commentsData} />;
};

const MovieDetail = async ({ params }: { params: { movieId: string } }) => {
  const { movieId } = await params;
  const query = `http://localhost:5000/movies/${movieId}`;
  const movie = await getData(query);

  return (
    <AppShell>
      <MovieDetailPage movie={movie} />
      <Suspense fallback={Loading()}>
        <CommentsContent movieId={movieId} />
      </Suspense>
    </AppShell>
  );
};

export default MovieDetail;
