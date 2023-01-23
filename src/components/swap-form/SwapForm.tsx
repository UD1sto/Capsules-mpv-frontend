import { SELECT_ITEMS2 } from "@/content";
import { Button, Stack, Typography } from "@mui/material";
import { ArrowDownIcon } from "public/icons";
import { Card } from "../card/Card";
import { SelectInput } from "../select-input/Select";
import styles from "./styles.module.css";

export function SwapForm() {
  return (
    <Card sx={{ borderRadius: "25px", maxWidth: 570 }}>
      <Stack>
        <Typography variant="subtitle2" mb={5}>
          Swap
        </Typography>
        <Stack>
          <Stack className={styles.inputBox}>
            <input type="number" value={0} />
            <SelectInput options={SELECT_ITEMS2} size="1rem" />
          </Stack>
          <Stack className={styles.inputBox}>
            <Typography variant="subtitle2">0.0</Typography>
            <Typography variant="subtitle2">Balance: 0</Typography>
          </Stack>
        </Stack>
        <Stack className={styles.divider}>
          <ArrowDownIcon />
        </Stack>
        <Stack mb={4}>
          <Stack className={styles.inputBox}>
            <input type="number" value={0} />
            <SelectInput options={SELECT_ITEMS2} size="1rem" />
          </Stack>
          <Stack className={styles.inputBox}>
            <Typography variant="subtitle2">0.0</Typography>
            <Typography variant="subtitle2">Balance: 0</Typography>
          </Stack>
        </Stack>
        <Button variant="contained">Connect wallet</Button>
      </Stack>
    </Card>
  );
}
