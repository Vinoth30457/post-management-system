import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";

const CommentDialog = ({ post, onClose }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.error("Error fetching comments:", error));
  }, [post]);

  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle variant="h5">Title:{post.title} Comments</DialogTitle>
      <DialogContent>
        {comments.map((comment) => (
          <div key={comment.id}>
            <Typography variant="body2">{comment.body}</Typography>
          </div>
        ))}
      </DialogContent>
    </Dialog>
  );
};

export default CommentDialog;
