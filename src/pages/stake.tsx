import { Card, StakeForm, TextItem } from "@/components";
import { STAKE_LABELS2, STAKE_VALUES2 } from "@/content";
import { Stack, Typography } from "@mui/material";
import styles from "@/styles/Stake.module.css";

export default function Stake() {
  return (
    <Stack className={styles.container}>
      <Typography variant="h3">Stake to earn</Typography>
      <Typography className={styles.subtitle} variant="subtitle1">
        Stake your tokens to earn rewards, select a lock date option to multiply
        your rewards.
      </Typography>
      <StakeForm />

      <Card
        sx={{ maxWidth: 570, borderRadius: "25px", mt: 4 }}
        spacing={2}
        title="Lido statistics"
      >
        {STAKE_LABELS2.map((label: string, i: number) => {
          return (
            <TextItem label={label} value={STAKE_VALUES2[i]} key={label} />
          );
        })}
      </Card>
    </Stack>
  );
}
