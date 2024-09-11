"use client";

import React from "react";
import Paper from "@mui/material/Paper";
import { Box, List, Typography } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { Label } from "@mui/icons-material";

const NewTaskAsidePanel = () => {
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
    borderColor: "primary.main",
  });

  return (
    <Paper elevation={3} sx={{ display: "flex", flexDirection: "column" }}>
      <Box>
        <List>
          <ListItem>
            <Typography
              variant="h6"
              sx={{ fontWeight: "600" }}
              className="font-plusJakarta"
            >
              Assigned Assignments
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              variant="h4"
              sx={{ fontWeight: "600", fontSize: "1.75rem" }}
              className="font-plusJakarta"
            >
              Creating Awesome Mobile Apps
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              variant="subtitle1"
              sx={{ color: "#54577A" }}
              className="font-plusJakarta"
            >
              UI UX Design . Apps Design
            </Typography>
          </ListItem>
        </List>
      </Box>
      <Box>
        <List>
          <ListItem>
            <Typography
              variant="h5"
              sx={{ fontWeight: "600", color: "#141522" }}
              className="font-plusJakarta"
            >
              Detail Student
            </Typography>
          </ListItem>
          <ListItem>
            <ListItemText
              sx={{ color: "#54577A" }}
              className="font-plusJakarta"
            >
              Student's name
            </ListItemText>
            <ListItemText
              sx={{ fontWeight: "600", color: "#141522" }}
              className="font-plusJakarta"
            >
              Skylar Dias
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText
              sx={{ color: "#54577A" }}
              className="font-plusJakarta"
            >
              Student Class
            </ListItemText>
            <ListItemText
              sx={{ fontWeight: "600", color: "#141522" }}
              className="font-plusJakarta"
            >
              MIPA 2
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText
              sx={{ color: "#54577A" }}
              className="font-plusJakarta"
            >
              Student Numbers
            </ListItemText>
            <ListItemText
              sx={{ fontWeight: "600", color: "#141522" }}
              className="font-plusJakarta"
            >
              10
            </ListItemText>
          </ListItem>
        </List>
      </Box>
      <Box>
        <List>
          <ListItem>
            <Typography
              variant="h5"
              sx={{ fontWeight: "600", color: "#141522" }}
              className="font-plusJakarta"
            >
              File Task
            </Typography>
          </ListItem>
          <ListItem>
            <ListItemText
              sx={{ color: "#54577A" }}
              className="font-plusJakarta"
            >
              Last Modified
            </ListItemText>
            <ListItemText>1 July 2022</ListItemText>
          </ListItem>
        </List>
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <List sx={{ width: "100%" }}>
          <ListItem>
            <ListItemText
              sx={{ color: "#54577A" }}
              className="font-plusJakarta"
            >
              File submissions
            </ListItemText>
          </ListItem>
        </List>
        <ListItem>
          <Button
            className="border-dashed h-40 w-full"
            component="label"
            role={undefined}
            variant="outlined"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
          >
            Upload files
            <VisuallyHiddenInput
              type="file"
              onChange={(event) => console.log(event.target.files)}
              multiple
            />
          </Button>
        </ListItem>
      </Box>
      <Box>
        <List
          sx={{ height: "100%", display: "flex", justifyContent: "center" }}
          className="font-plusJakarta"
        >
          <Button className="w-48" variant="contained">
            Submit
          </Button>
        </List>
      </Box>
    </Paper>
  );
};

export default NewTaskAsidePanel;
