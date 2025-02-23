import { Grid2, Skeleton } from "@mui/material";

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

export default MovieSkeleton;
