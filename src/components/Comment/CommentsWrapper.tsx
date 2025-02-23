"use client";

import AddComment from "./AddComment";
import { useEffect, useState } from "react";
import Comments from "./Comments";

interface CommentType {
  id: number;
  movieId: number;
  comment: string;
}

const CommentsWrapper = ({ movieId }: { movieId: string }) => {
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
      <AddComment
        comment={comment}
        setComment={setComment}
        movieId={movieId}
        fetchComments={fetchComments}
      />
      <Comments
        {...{
          comments,
          idComment,
          setIdComment,
          editedComment,
          setEditedComment,
          handleEditComment,
          fetchComments,
        }}
      />
    </>
  );
};

export default CommentsWrapper;
