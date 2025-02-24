export const getData = async (query: string) => {
  const res = await fetch(`${query}`, {
    next: { revalidate: 60 },
  });
  const movies = await res.json();

  return movies;
};
