import React from "react";
import { MovieType } from "@/types/Movie/MovieType";
import { Container, Typography, Box } from "@mui/material";
import Image from "next/image";
import GradeIcon from "@mui/icons-material/Grade";
import MovieCast from "@/components/Movies/Actors/MovieCast";
import Grid2 from "@mui/material/Grid2";
import GenreButton from "@/components/Buttons/GenreButton/GenreButton";

const MovieDetailPage = ({ movie }: { movie: MovieType }) => {
  const movieCastId: number[] = movie.actors.map((actor) => actor);

  return (
    <Container className="py-10">
      <Grid2 container>
        <Grid2 size={{ xs: 12, md: 4 }} px={{ xs: 5, md: 0 }}>
          <Box className="flex flex-col align-middle items-center ">
            <Image
              src={movie.poster}
              alt={movie.title}
              width={350}
              height={500}
              className="sm:w-[50vw] md:w-[20vw] rounded-lg shadow-lg shadow-black/80"
            />
            <Typography
              variant="h5"
              sx={{ color: "text.primary", fontWeight: "bold", pt: 4 }}
              display={{ md: "none" }}
            >
              {movie.title} ({movie.year})
            </Typography>
            <Box className="flex flex-row gap-2 items-center" py={{ md: 4 }}>
              <GradeIcon className="text-yellow-500 text-3xl ml-[-12px]" />
              <Typography
                className="text-xl font-bold"
                sx={{ color: "text.primary" }}
              >
                {movie.rating}/10
              </Typography>
            </Box>
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <Box px={3} pt={{ xs: 2, md: 0 }}>
            <Typography
              variant="h3"
              sx={{ color: "text.primary", fontWeight: "bold", pb: 3 }}
              display={{ xs: "none", md: "block" }}
            >
              {movie.title} ({movie.year})
            </Typography>
            <Box
              key={movie.id}
              sx={{ display: "flex", flexDirection: "row", gap: 2, pb: 2 }}
            >
              {movie.genre.map((genre) => (
                <GenreButton genre={genre} key={genre} />
              ))}
            </Box>

            <Typography
              variant="h5"
              sx={{ color: "text.primary", fontWeight: "bold", pb: 1 }}
            >
              Description:
            </Typography>
            <Typography sx={{ color: "text.primary" }}>
              {movie.description}
            </Typography>

            <Typography
              variant="h5"
              className="font-bold pt-10"
              sx={{ color: "text.primary" }}
            >
              Director: {movie.director}
            </Typography>

            <MovieCast castId={movieCastId} />
          </Box>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default MovieDetailPage;
