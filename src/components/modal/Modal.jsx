import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { PrimaryCloseIcon } from "public/icons";
import styles from "./styles.module.css";

export function BasicModal({ open, setOpen, children }) {
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={styles.modalBox}>
        <PrimaryCloseIcon className={styles.closeIcon} onClick={handleClose} />
        {children}
      </Box>
    </Modal>
  );
}
