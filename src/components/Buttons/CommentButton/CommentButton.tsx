import { Button } from "@mui/material";

interface PropsType {
  movieId: string;
  comment?: string;
  onCommentAdded: () => void; // Callback untuk update komentar
}

const CommentButton = ({ movieId, comment, onCommentAdded }: PropsType) => {
  const handleComment = async () => {
    if (comment) {
      await fetch("http://localhost:5000/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ movieId: movieId, comment: comment }),
      });

      onCommentAdded();
    }
  };

  return (
    <Button
      variant="contained"
      className="ml-[57px]"
      size="small"
      onClick={handleComment}
    >
      Comment
    </Button>
  );
};

export default CommentButton;
