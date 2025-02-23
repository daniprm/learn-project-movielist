import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface PropsType {
  commentId: number;
  onDeleteComment: () => void;
}

const DeleteButton = ({ commentId, onDeleteComment }: PropsType) => {
  const handleDelete = () => {
    fetch(`http://localhost:5000/comments/${commentId}`, {
      method: "DELETE",
    });
    onDeleteComment();
  };

  return (
    <IconButton
      className="absolute top-8 right-0"
      title="Delete"
      onClick={handleDelete}
    >
      <DeleteIcon className="text-sm" />
    </IconButton>
  );
};

export default DeleteButton;
