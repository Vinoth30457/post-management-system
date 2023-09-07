import React from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { PostList } from "./components";
function App() {
  return (
    <Container maxWidth="md">
      <CssBaseline />
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography variant="h4" gutterBottom>
          Simple Post Management Page
        </Typography>
        <PostList />
      </Paper>
    </Container>
  );
}

export default App;
