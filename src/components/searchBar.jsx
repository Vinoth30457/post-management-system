import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    localStorage.setItem("search", JSON.stringify(event.target.value));
  };
  useEffect(() => {
    const storedText = JSON.parse(localStorage.getItem("search"));

    if (storedText) {
      setSearchTerm(storedText);
    }
  }, []);
  console.log(searchTerm);

  return (
    <TextField
      label="Search"
      variant="outlined"
      fullWidth
      value={searchTerm}
      onChange={handleSearchChange}
    />
  );
};

export default SearchBar;
