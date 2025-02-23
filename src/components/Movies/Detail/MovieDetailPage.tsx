import React from "react";
import { MovieType } from "../MovieType";
import { Container, Typography, Box, Button } from "@mui/material";
import Image from "next/image";
import GradeIcon from "@mui/icons-material/Grade";
import MovieCast from "@/components/Movies/Actors/MovieCast";
import CommentBox from "@/components/Comment/CommentBox";

const MovieDetailPage = ({ movie }: { movie: MovieType }) => {
  const movieCastId: number[] = movie.actors.map((actor) => actor);

  return (
    <Container className="py-10">
      <Box className="flex flex-col align-middle items-center">
        <Image
          src={movie.poster}
          alt={movie.title}
          width={350}
          height={500}
          className="w-[50vw] rounded-lg shadow-lg shadow-black/80"
        />
        <Typography
          variant="h5"
          sx={{ color: "text.primary", fontWeight: "bold", pt: 4 }}
        >
          {movie.title} ({movie.year})
        </Typography>
        <Box className="flex flex-row gap-2 items-center py-1">
          <GradeIcon className="text-yellow-500 text-3xl ml-[-12px]" />
          <Typography
            className="text-xl font-bold"
            sx={{ color: "text.primary" }}
          >
            {movie.rating}/10
          </Typography>
        </Box>
      </Box>

      <Box sx={{ px: 3, pt: 2 }}>
        <Box sx={{ display: "flex", flexDirection: "row", gap: 2, pb: 2 }}>
          {movie.genre.map((genre) => (
            <>
              <Button
                key={genre}
                variant="outlined"
                sx={{ border: 1, borderRadius: 100, textTransform: "none" }}
              >
                {genre}
              </Button>
            </>
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
      <CommentBox movieId={movie.id} />
    </Container>
  );
};

export default MovieDetailPage;
