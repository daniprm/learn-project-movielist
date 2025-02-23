import { MovieType } from "./MovieType";
import { Grid2, Box, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import WatchlistButton from "../Buttons/WatchlistButton/WatchlistButton";

const MovieList = ({ movies }: { movies: MovieType[] }) => {
  return (
    <>
      <Grid2 container spacing={5} className="p-10">
        {movies?.length > 0 ? (
          movies?.map((movie: MovieType) => (
            <Grid2 size={3} key={movie.id}>
              <Box className="relative cursor-pointer hover:text-slate-300 hover:scale-110 transition-all duration-200">
                <WatchlistButton movieId={movie.id} />
                <Link href={`/movie/${movie.id}`} passHref>
                  <Image
                    src={movie.poster}
                    width={350}
                    height={500}
                    alt={movie.title}
                    className="w-full rounded-md shadow-lg"
                    priority
                  />
                  <Box className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 rounded-b-md">
                    <Typography className="text-sm p-4 text-center font-bold">
                      {`${movie.title} (${movie.year})`}
                    </Typography>
                  </Box>
                </Link>
              </Box>
            </Grid2>
          ))
        ) : (
          <Typography className="text-center w-full" color="error">
            No movies available.
          </Typography>
        )}
      </Grid2>
    </>
  );
};

export default MovieList;
