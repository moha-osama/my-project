import Image from "next/image";
import { Box, Toolbar } from "@mui/material";
import Tasks from "@/components/Tasks/Tasks";

export default function Home() {
  return (
    <div>
      <Tasks />
    </div>
  );
}
