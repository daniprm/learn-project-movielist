export const getMovie = async (movieId: string) => {
  const res = await fetch(`http://localhost:5000/movies/${movieId}`, {
    cache: "no-store",
  });
  const movie = await res.json();

  await new Promise((resolve) => setTimeout(resolve, 500));

  return movie;
};
