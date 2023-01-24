import {
  Button,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { CloseIcon } from "public/icons";
import React from "react";
import styles from "./styles.module.css";

interface AlertProps {
  opened: boolean;
  title?: string;
  actionTitle?: string;
  handleAction?: () => void;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Alert(props: AlertProps) {
  const md = useMediaQuery("(min-width:800px)");
  const { title, actionTitle, handleAction, opened, setOpened, ...rest } =
    props || {};

  const handleClose = () => {
    setOpened(false);
  };

  return (
    <Stack sx={{ display: opened ? "flex" : "none" }} {...rest}>
      {md && (
        <Stack className={styles.alertBox}>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
          <Typography>{title || ""}</Typography>
          {actionTitle && (
            <Button variant="outlined" onClick={handleAction}>
              {actionTitle}
            </Button>
          )}
        </Stack>
      )}
      {!md && (
        <Stack className={styles.alertBox}>
          <Typography>{title || ""}</Typography>
          <Stack direction="row">
            {actionTitle && (
              <Typography onClick={handleAction}>{actionTitle}</Typography>
            )}
            <Typography onClick={handleClose}>Close</Typography>
          </Stack>
        </Stack>
      )}
    </Stack>
  );
}
