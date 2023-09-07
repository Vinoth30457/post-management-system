import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const PostCard = ({ post, onDelete, onOpenDialog }) => {
  return (
    <Card
      sx={{
        width: "20rem",
        minHeight: "20rem",
        marginBottom: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <CardContent
        sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        onClick={onOpenDialog}
      >
        <Typography variant="h5">Post:{post.id}</Typography>
        <Typography variant="h5">Title:{post.title}</Typography>
        <Typography variant="body2">{post.body}</Typography>
      </CardContent>
      <Button onClick={onDelete} color="error">
        Delete
      </Button>
    </Card>
  );
};

export default PostCard;
