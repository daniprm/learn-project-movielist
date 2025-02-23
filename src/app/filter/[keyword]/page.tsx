import AppShell from "@/components/layouts/AppShell/AppShell";
import { Suspense } from "react";
import Header from "@/components/layouts/Header/Header";
import MovieSkeleton from "@/components/Skeleton/MovieSkeleton";
import MoviesWithStreaming from "@/components/Movies/MoviesWithStreaming";

const Filter = async ({ params }: { params: { keyword: string } }) => {
  const { keyword } = await params;
  const decodedKeyword = decodeURIComponent(keyword);

  return (
    <AppShell>
      <Header>Hasil Filter</Header>
      <Suspense fallback={<MovieSkeleton />}>
        <MoviesWithStreaming keyword={decodedKeyword} />
      </Suspense>
    </AppShell>
  );
};

export default Filter;
