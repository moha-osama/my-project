import React from "react";
import { forwardRef } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Image from "next/image";
import coverImage from "@/assets/cover.jpg";
import { Box } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import InputLabel from "@mui/material/InputLabel";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export interface taskCardProps {
  title: string;
  tag: string;
  progress: number;
  estimatedTime: string;
}

export const TaskCard: React.ForwardRefExoticComponent<
  taskCardProps & React.RefAttributes<HTMLDivElement>
> = forwardRef<HTMLDivElement, taskCardProps>(
  ({ title, tag, progress, estimatedTime }, ref) => {
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
      height: 10,
      borderRadius: 5,
      [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[200],
        ...theme.applyStyles("dark", {
          backgroundColor: theme.palette.grey[800],
        }),
      },
      [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: "#1a90ff",
        ...theme.applyStyles("dark", {
          backgroundColor: "#308fe8",
        }),
      },
    }));

    return (
      <Card
        ref={ref}
        sx={{
          padding: "1.5rem",
          borderRadius: "0.625rem",
          width: "20.5rem",
          height: "19.625rem",
        }}
      >
        <Image
          className="rounded-[0.625rem] w-[17.5rem] h-[6.875rem] object-cover"
          src={coverImage}
          quality={100}
          alt="task cover"
        />
        <CardContent sx={{ padding: "1rem 0rem" }}>
          <Typography
            variant="h1"
            sx={{
              color: "#141522",
              fontSize: "1rem",
              fontWeight: "600",
              lineHeight: "150%",
              letterSpacing: "-0.02rem",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#54577A",
              fontSize: "0.75rem",
              fontWeight: "500",
              lineHeight: "normal",
              letterSpacing: "-0.015rem",
            }}
          >
            {tag}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              padding: "1rem 0 1.25rem 0",
            }}
          >
            <InputLabel
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                color: "#141522",
                fontSize: "1rem",
                fontWeight: "500",
              }}
            >
              Progress
              <Typography variant="body2" sx={{ color: "#546FFF" }}>
                {progress}%
              </Typography>
            </InputLabel>
            <BorderLinearProgress variant="determinate" value={progress} />
          </Box>
          <Box sx={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <AccessTimeIcon sx={{ color: "#54577A" }} />
            <Typography
              sx={{ color: "#141522", fontSize: "1rem", fontWeight: "500" }}
            >
              {estimatedTime}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    );
  }
);
