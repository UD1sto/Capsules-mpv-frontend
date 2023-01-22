import { Button, Stack, Typography, useMediaQuery } from "@mui/material";
import styles from "./styles.module.css";

export function Farm() {
  const sm = useMediaQuery("(min-width:500px)");
  return (
    <Stack className={styles.farmBox}>
      <Stack>
        <Typography>LP Available</Typography>
        <Typography mb="20px" variant="subtitle2">
          0.0
        </Typography>
        <Typography>LP Staked</Typography>
        <Typography variant="subtitle2">0.0</Typography>
      </Stack>
      <Stack className={styles.btnBox}>
        <Button variant="contained">Stake all</Button>
        <Button variant="outlined">Unstake all</Button>
      </Stack>
    </Stack>
  );
}
