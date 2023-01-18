import { Stack, Typography } from "@mui/material";
import styles from "./styles.module.css";

export function Footer() {
  return (
    <Stack className={styles.footerBox}>
      <Typography variant="subtitle1">Copyright © 2022 Capsules</Typography>
      <Typography variant="subtitle1">All rights reserved</Typography>
    </Stack>
  );
}
