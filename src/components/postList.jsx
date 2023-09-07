import React, { useState, useEffect } from "react";
import PostCard from "./postCard";
import CommentDialog from "./comment";
import SearchBar from "./searchBar";
import RefreshButton from "./refreshBtn";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts"));

    if (storedPosts) {
      setPosts(storedPosts);
    } else {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => {
          setPosts(data);
          localStorage.setItem("posts", JSON.stringify(data));
        })
        .catch((error) => console.error("Error fetching posts:", error));
    }
  }, []);

  const handleDeletePost = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  const handleOpenDialog = (postId) => {
    const post = posts.find((post) => post.id === postId);
    setSelectedPost(post);
  };

  const handleDialogClose = () => {
    setSelectedPost(null);
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        flexDirection: "column",
      }}
    >
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <RefreshButton setPosts={setPosts} setSearchTerm={setSearchTerm} />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {posts
          .filter((post) =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((post) => (
            <PostCard
              key={post.id}
              post={post}
              onDelete={() => handleDeletePost(post.id)}
              onOpenDialog={() => handleOpenDialog(post.id)}
            />
          ))}
      </div>
      {selectedPost && (
        <CommentDialog
          post={selectedPost}
          onClose={() => handleDialogClose()}
        />
      )}
    </div>
  );
};

export default PostList;
