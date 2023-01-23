import { SELECT_ITEMS2 } from "@/content";
import { Button, InputBase, Stack, Typography } from "@mui/material";
import { ArrowDownIcon } from "public/icons";
import { useState } from "react";
import { Card } from "../card/Card";
import { SelectInput } from "../select-input/Select";
import styles from "./styles.module.css";

export function SwapForm() {
  const [value, setValue] = useState<number>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  return (
    <Card sx={{ borderRadius: "25px", maxWidth: 570, px: "0!important" }}>
      <Stack className={styles.box}>
        <Typography variant="subtitle2" mb={5} ml="30px">
          Swap
        </Typography>
        <Stack>
          <Stack className={styles.inputBox}>
            <InputBase
              type="number"
              onChange={handleChange}
              defaultValue={0}
              className={styles.textRestr}
            />
            <SelectInput options={SELECT_ITEMS2} size="1rem" />
          </Stack>
          <Stack className={styles.inputBox}>
            <Typography variant="subtitle2">$0.0</Typography>
            <Typography variant="subtitle2">Balance: 0</Typography>
          </Stack>
        </Stack>
        <Stack className={styles.divider}>
          <ArrowDownIcon />
        </Stack>
        <Stack mb={4}>
          <Stack className={styles.inputBox}>
            <Typography fontSize="2rem" className={styles.textRestr}>
              {value * 2}
            </Typography>
            <SelectInput options={SELECT_ITEMS2} size="1rem" />
          </Stack>
          <Stack className={styles.inputBox}>
            <Typography variant="subtitle2">$0.0</Typography>
            <Typography variant="subtitle2">Balance: 0</Typography>
          </Stack>
        </Stack>
        <Button variant="contained">Connect wallet</Button>
      </Stack>
    </Card>
  );
}
