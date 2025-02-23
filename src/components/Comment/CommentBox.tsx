import { Box } from "@mui/material";
import Comments from "./Comments";

const CommentBox = async ({ movieId }: { movieId: string }) => {
  return (
    <>
      <Box
        component="form"
        className="mx-3 my-8 border-solid border-2 rounded-lg p-5"
        sx={{
          borderColor: "text.primary",
        }}
        autoComplete="off"
      >
        <Comments movieId={movieId} />
      </Box>
    </>
  );
};

export default CommentBox;
