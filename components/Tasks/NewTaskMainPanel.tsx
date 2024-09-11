import React from "react";
import {
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import Image from "next/image";
import imageCover from "@/assets/cover.jpg";
import {
  Box,
  List,
  Typography,
  TextField,
  InputBase,
  Button,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PeopleIcon from "@mui/icons-material/People";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AddIcon from "@mui/icons-material/Add";
import TasksAndSubtasks from "./TasksAndSubtasks";

const NewTaskMainPanel = () => {
  return (
    <Paper
      className="rounded-lg"
      elevation={3}
      sx={{ display: "flex", flexDirection: "column", color: "#141522" }}
    >
      <Box component="div">
        <Image
          className="w-full h-80 object-cover rounded-t-lg"
          quality={100}
          src={imageCover}
          alt="task cover"
        />
      </Box>
      <Box component="div" className="p-6">
        <Box component="div">
          <InputBase
            inputProps={{
              style: { fontSize: 40 },
            }}
            className="pl-0 border-none w-full font-plusJakarta color-[#141522]"
            id="title"
            value="Creating Awesome Mobile Apps"
          />
        </Box>
        <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <Typography variant="subtitle2" className="font-plusJakarta">
            UI UX Design . Apps Design
          </Typography>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            className="h-4"
          />
          <Typography
            variant="subtitle2"
            sx={{ color: "#04A4F4" }}
            className="font-plusJakarta"
          >
            + Get Mentors
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "1.25rem",
            alignItems: "center",
            padding: "1rem 0 0 0 ",
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              display: "flex",
              gap: "0.25rem",
              alignItems: "center",
            }}
          >
            <AccessTimeIcon />
            200 Students Involved
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              display: "flex",
              gap: "0.25rem",
              alignItems: "center",
            }}
          >
            <PeopleIcon />1 Hour
          </Typography>
        </Box>
      </Box>
      <Box
        className="p-6"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "start",
        }}
      >
        <Typography variant="h5">Description</Typography>
        <Typography variant="body2">
          Follow the video tutorial above. Understand how to use each tool in
          the Figma application. Also learn how to make a good and correct
          design. Starting from spacing, typography, content, and many other
          design hierarchies. Then try to make it yourself with your imagination
          and inspiration.
        </Typography>
      </Box>
      <Box className="p-6">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5">Tasks</Typography>
          <Button variant="contained" size="small" color="primary">
            <AddIcon />
            <Typography variant="button" sx={{ textTransform: "capitalize" }}>
              Add task
            </Typography>
          </Button>
        </Box>
        <TasksAndSubtasks />
      </Box>
    </Paper>
  );
};

export default NewTaskMainPanel;
