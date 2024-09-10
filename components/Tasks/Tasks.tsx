"use client";

import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { TaskCard } from "./TaskCard";
import { taskCardProps } from "./TaskCard";
import { Grid2, IconButton, Typography } from "@mui/material";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import scrollHandler from "@/lib/utils";

type TaskCards = taskCardProps[];

const DUMMYDATA: TaskCards = [
  {
    title: "Redesign Website",
    tag: "Web Developer",
    progress: 75, // Progress is now a string percentage
    estimatedTime: "4 weeks",
  },
  {
    title: "Database Migration",
    tag: "Web Developer",
    progress: 40,
    estimatedTime: "6 weeks",
  },
  {
    title: "Implement New Authentication",
    tag: "Web Developer",
    progress: 90,
    estimatedTime: "5 weeks",
  },
  {
    title: "Mobile App Release",
    tag: "Web Developer",
    progress: 60,
    estimatedTime: "8 weeks",
  },
  {
    title: "SEO Optimization",
    tag: "Web Developer",
    progress: 30,
    estimatedTime: "3 months",
  },
];

export default function Tasks() {
  const cardsContainerRef = React.useRef<HTMLDivElement>(null);
  const cardRef = React.useRef<HTMLElement>(null);
  const [isAtStart, setIsAtStart] = React.useState(true);
  const [isAtEnd, setIsAtEnd] = React.useState(false);

  const handlePrev = () => {
    scrollHandler(cardsContainerRef, cardRef, true);
  };

  const handleNext = () => {
    scrollHandler(cardsContainerRef, cardRef);
  };

  return (
    <Box>
      <Box
        component="div"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "2rem",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: "#141522",
            fontSize: "1.5rem",
            fontWeight: "600",
            lineHeight: "150%",
          }}
        >
          Time Limit
        </Typography>
        <Box sx={{ display: { md: "flex", xs: "none" }, gap: "0.5rem" }}>
          <IconButton>
            <ArrowBackIosNewRoundedIcon
              onClick={handlePrev}
              sx={{ color: "black" }}
            />
          </IconButton>
          <IconButton>
            <ArrowForwardIosRoundedIcon
              onClick={handleNext}
              sx={{ color: "black" }}
            />
          </IconButton>
        </Box>
      </Box>
      <Box
        className="overflow-scroll grid gap-y-3 md:justify-items-start justify-items-center md:grid-cols-5 lsm:grid-cols-2 grid-cols-1 no-scrollbar py-1"
        ref={cardsContainerRef}
        sx={{
          display: "flex",
          gap: { md: "22rem" },
          margin: { md: "0 0 0 2rem", xs: "0 1rem 0 1rem" },
          maxWidth: { md: "calc(100vh-240px)" },
        }}
      >
        {DUMMYDATA.map((item) => (
          <Box key={item.title} sx={{ minWidth: 300 }}>
            <TaskCard
              ref={cardRef}
              title={item.title}
              tag={item.tag}
              progress={item.progress}
              estimatedTime={item.estimatedTime}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
