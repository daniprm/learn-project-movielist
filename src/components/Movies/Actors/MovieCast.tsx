import { Typography } from "@mui/material";

export interface ActorType {
  id: number;
  name: string;
}

const MovieCast = async ({ castId }: { castId: number[] }) => {
  const res = await fetch(`http://localhost:5000/actors`);
  const actors = await res.json();
  const actorsFiltered = actors.filter((actor: ActorType) =>
    castId.includes(actor.id)
  );
  const cast = actorsFiltered.map((actor: ActorType) => actor.name);

  return (
    <Typography variant="h6" className="pt-2" sx={{ color: "text.primary" }}>
      <span className="font-bold">Cast:</span> {cast.join(", ")}
    </Typography>
  );
};

export default MovieCast;
