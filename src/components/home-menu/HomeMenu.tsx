import { Button, Stack, Typography } from "@mui/material";
import styles from "./styles.module.css";

export function HomeMenu() {
  return (
    <Stack className={styles.container}>
      <Stack className={styles.logoBox}>
        <img src="/icons/logo.svg" alt="logo" className={styles.logoImg} />
        <Typography>Capsula</Typography>
      </Stack>
      <Button variant="contained">Enter app</Button>
    </Stack>
  );
}
