import {  Stack, Typography, Container } from "@mui/material";
import styles from "./styles.module.css";

const BENEFITS = [
  {
    label: "Price",
    value: "$1.11+",
  },
  {
    label: "Total pairs",
    value: "18.32k",
  },
  {
    label: "Total liquidity",
    value: "$563.25m",
  },
  {
    label: "Total Volume",
    value: "$236.92b",
  },
];

export function Benefits() {
  return (
    <Stack className={styles.benefitsBlock}>
      <Container maxWidth="xl">
        <Stack className={styles.benefitsBox}>
          <Typography variant="h2">
            Why choose
            <br /> capsules
          </Typography>
          <Stack className={styles.benefitsContainer}>
            {BENEFITS.map((benefit) => (
              <Stack>
                <Typography className={styles.benValue}>
                  {benefit.value}
                </Typography>
                <Typography variant="subtitle1">{benefit.label}</Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}
