import React from "react";
import { Grid2 } from "@mui/material";
import NewTaskAsidePanel from "./NewTaskAsidePanel";
import NewTaskMainPanel from "./NewTaskMainPanel";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";

const NewTaskPanel = () => {
  return (
    <Grid2
      className="h-full overflow-y-scroll no-scrollbar"
      container
      spacing={2}
      columns={{ xs: 1, md: 12 }}
      sx={{ marginX: "0", paddingY: "0", borderRadius: "inherit" }}
    >
      <Grid2 size={8}>
        <NewTaskMainPanel />
      </Grid2>
      <Grid2 size={4} className="">
        <NewTaskAsidePanel />
      </Grid2>
    </Grid2>
  );
};

export default NewTaskPanel;
