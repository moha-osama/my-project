"use client";

import React from "react";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";

const NewTask = () => {
  return (
    <IconButton className="p-6 fixed bottom-6 right-6  bg-[#546FFF] hover:bg-[#10197A] hover:scale-105 hover:shadow-lg hover:text-[#DCE4FF] transition">
      <AddIcon className="text-white font-bold" />
    </IconButton>
  );
};

export default NewTask;
