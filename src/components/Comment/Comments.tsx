"use client";

import { Box, Typography, Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";
import CommentButton from "../Buttons/CommentButton/CommentButton";
import IconButton from "@mui/material/IconButton";
import { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import SaveEditButton from "../Buttons/CommentButton/Edit/SaveEditButton";
import DeleteButton from "../Buttons/CommentButton/Delete/DeleteButton";

interface CommentType {
  id: number;
  movieId: number;
  comment: string;
}

const Comments = ({ movieId }: { movieId: string }) => {
  const [comment, setComment] = useState<string>("");
  const [comments, setComments] = useState<CommentType[]>([]);
  const [idComment, setIdComment] = useState<number | null>(null);
  const [editedComment, setEditedComment] = useState<string>("");

  const handleEditComment = (idComment: number) => {
    setIdComment(idComment);
  };

  const fetchComments = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/comments?movieId=${movieId}`
      );
      const data = await res.json();

      setComments(data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [movieId]);

  return (
    <>
      <Box className="flex flex-row gap-2 pb-4 items-center pr-6">
        <AccountCircleIcon
          sx={{ color: "text.primary" }}
          className="text-5xl"
        />
        <TextField
          label="Add a Comment"
          variant="standard"
          slotProps={{ inputLabel: { style: { color: "gray" } } }}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          multiline
          fullWidth
        />
      </Box>

      <CommentButton
        movieId={movieId}
        comment={comment}
        onCommentAdded={fetchComments}
      />

      <Box className="pt-12 pl-[57px] pr-[25px]">
        {comments.map((c) => (
          <Box key={c.id} className="relative ">
            <Box
              className="flex flex-row gap-2 mb-3 pb-4 border-b-[1px] "
              sx={{ borderColor: "text.primary" }}
            >
              <AccountCircleIcon
                sx={{ color: "text.primary" }}
                className="text-5xl"
              />
              {idComment === c.id ? (
                <TextField
                  sx={{
                    color: "red",

                    pr: "36px",
                    pt: "12px",
                  }}
                  defaultValue={c.comment}
                  variant="standard"
                  multiline
                  fullWidth
                  InputProps={{ disableUnderline: true }}
                  onChange={(e) => setEditedComment(e.target.value)}
                />
              ) : (
                <Typography
                  variant="caption"
                  sx={{
                    color: "text.primary",
                    wordBreak: "break-word",
                    whiteSpace: "normal",
                    pr: "36px",
                    pt: "12px",
                  }}
                >
                  {c.comment}
                </Typography>
              )}
            </Box>

            {idComment !== c.id && (
              <IconButton
                className="absolute top-[-4px] right-0"
                title="Edit"
                onClick={() => handleEditComment(c.id)}
              >
                <EditIcon className="text-sm" />
              </IconButton>
            )}

            <DeleteButton commentId={c.id} onDeleteComment={fetchComments} />

            {idComment === c.id && (
              <Box className="flex flex-row gap-3 justify-end">
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => setIdComment(null)}
                >
                  Cancel
                </Button>
                <SaveEditButton
                  commentId={c.id}
                  onEditComment={fetchComments}
                  comment={editedComment}
                  setIdComment={setIdComment}
                />
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Comments;
