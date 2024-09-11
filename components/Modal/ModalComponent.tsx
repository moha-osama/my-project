"use client";

import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useAppSelector, useAppDispatch, useAppStore } from "@/lib/store/hooks";
import { uiActions } from "@/lib/features/ui-slice";
import NewTaskPanel from "../Tasks/NewTaskPanel";
import { Height } from "@mui/icons-material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { md: "80%", xs: "90%" },
  height: "90%",
  bgcolor: "background.paper",
  borderRadius: "0.625rem",
  boxShadow: 24,
  p: 2,
  backgroundColor: "#dadada",
};

const ModalComponent = () => {
  const dispatch = useAppDispatch();

  const modalIsOpen = useAppSelector((state) => state.ui.modalIsOpen);
  const handleToggleModal = () => {
    dispatch(uiActions.toggleModel());
  };

  return (
    <Modal
      open={modalIsOpen}
      onClose={handleToggleModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <NewTaskPanel />
      </Box>
    </Modal>
  );
};

export default ModalComponent;
