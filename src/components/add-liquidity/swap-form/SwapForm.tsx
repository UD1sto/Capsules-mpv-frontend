import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./styles.module.css";

export function AddLiqForm() {
  return (
    <Stack spacing={2.2}>
      {[1, 2].map((el) => (
        <Stack
          sx={{
            backgroundColor: (theme) => theme.palette.background.default,
          }}
          className={styles.inputBox}
          key={el}
        >
          <Image src="/images/bnc.png" alt="bnc" width={30} height={30} />
          <Typography m="0 10px">Ethereum</Typography>
        </Stack>
      ))}

      <Typography variant="subtitle1">Bonus: 00.00%</Typography>
      <Button variant="contained">Connect wallet</Button>
    </Stack>
  );
}
