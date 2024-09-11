import Image from "next/image";
import { Box, Toolbar, Modal } from "@mui/material";
import Tasks from "@/components/Tasks/Tasks";
import ModalComponent from "@/components/Modal/ModalComponent";

export default function Home() {
  return (
    <div>
      <ModalComponent />
      <Tasks />
    </div>
  );
}
