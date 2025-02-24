"use client";

import AddComment from "./AddComment";
import { useEffect, useState } from "react";
import Comments from "./Comments";
import { CommentType } from "@/types/Comment/CommentType";
import { getData } from "@/Utilities/Movies/getData";

const CommentsWrapper = ({
  movieId,
  commentsData,
}: {
  movieId: string;
  commentsData: CommentType[];
}) => {
  const [comment, setComment] = useState<string>("");
  const [comments, setComments] = useState<CommentType[]>(commentsData);
  const [idComment, setIdComment] = useState<number | null>(null);
  const [editedComment, setEditedComment] = useState<string>("");

  const handleEditComment = (idComment: number) => {
    setIdComment(idComment);
  };

  const fetchComments = async () => {
    try {
      const query = `http://localhost:5000/comments?movieId=${movieId}`;
      const data = await getData(query);

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
