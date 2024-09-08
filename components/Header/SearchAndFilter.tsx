import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import { Box } from "@mui/material";

const SearchAndFilter = () => {
  return (
    <Box component="div" sx={{ display: "flex" }}>
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Task"
          inputProps={{ "aria-label": "search Task" }}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon sx={{ color: "##8E92BC" }} />
        </IconButton>
      </Paper>
    </Box>
  );
};

export default SearchAndFilter;
