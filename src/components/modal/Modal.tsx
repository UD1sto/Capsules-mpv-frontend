import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { PrimaryCloseIcon } from "public/icons";
import styles from "./styles.module.css";

interface BasicModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}
export function BasicModal(props: BasicModalProps) {
  const { open, setOpen, children } = props || {};
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
