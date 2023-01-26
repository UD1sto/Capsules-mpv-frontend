import { STAKE_LABELS, STAKE_VALUES } from "@/content";
import { Button, Stack, Typography } from "@mui/material";
import { Card } from "../card/Card";
import { Input } from "../input/Input";
import styles from "./styles.module.css";

export function StakeForm() {
  return (
    <Card sx={{ maxWidth: 570, borderRadius: "25px" }}>
      <Input
        input={{ placeholder: "Amount", type: "number" }}
        endBox={{
          box: <EndButton />,
        }}
      />
      <Button variant="contained" sx={{ mt: 2.2 }}>
        Connect wallet
      </Button>

      <Stack spacing={2} mt={6}>
        {STAKE_LABELS.map((label: string, i: number) => {
          return <TextItem label={label} value={STAKE_VALUES[i]} />;
        })}
      </Stack>
    </Card>
  );
}

const EndButton = () => {
  return (
    <Button className={styles.btn} variant="contained">
      MAX
    </Button>
  );
};

export const TextItem = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => {
  return (
    <Stack className={styles.textBox}>
      <Typography variant="subtitle1">{label}</Typography>
      <Typography variant="subtitle1">{value || ""}</Typography>
    </Stack>
  );
};
