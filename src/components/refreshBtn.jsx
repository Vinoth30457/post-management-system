import React from "react";
import Button from "@mui/material/Button";

const RefreshButton = ({ setPosts, setSearchTerm }) => {
  const handleRefresh = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        localStorage.setItem("posts", JSON.stringify(data));
        localStorage.setItem("search", JSON.stringify(""));
        setSearchTerm("");
      })
      .catch((error) => console.error("Error fetching posts:", error));
  };

  return (
    <Button variant="contained" color="primary" onClick={handleRefresh}>
      Refresh State
    </Button>
  );
};

export default RefreshButton;
