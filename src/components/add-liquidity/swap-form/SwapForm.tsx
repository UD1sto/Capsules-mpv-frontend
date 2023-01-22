import { Button, Stack, Typography } from "@mui/material";
import styles from "./styles.module.css";

export function SwapForm() {
  return (
    <Stack spacing={2.2}>
      <Stack
        sx={{
          backgroundColor: (theme) => theme.palette.background.default,
        }}
        className={styles.inputBox}
      >
        <img src="/images/bnc.png" alt="bnc"/>
        <Typography m="0 10px">Ethereum</Typography>
      </Stack>
      <Stack
        sx={{
          backgroundColor: (theme) => theme.palette.background.default,
        }}
        className={styles.inputBox}
      >
        <img src="/images/bnc.png" alt="bnc"/>
        <Typography m="0 10px">Ethereum</Typography>
      </Stack>
      <Typography variant="subtitle1">Bonus: 00.00%</Typography>
      <Button variant="contained">Connect wallet</Button>
    </Stack>
  );
}
