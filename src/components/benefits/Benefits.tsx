import { Stack, Typography, Container } from "@mui/material";
import styles from "./styles.module.css";

export interface Benefit {
  value?: string;
  label?: string;
}

export interface BenefitsProps {
  benefits: Array<Benefit>;
}

export function Benefits(props: BenefitsProps) {
  const { benefits } = props || {};

  return (
    <Stack className={styles.benefitsBlock}>
      <Container maxWidth="xl">
        <Stack className={styles.benefitsBox}>
          <Typography variant="h2">
            Why choose
            <br /> capsules
          </Typography>
          <Stack className={styles.benefitsContainer}>
            {benefits?.map((benefit) => (
              <BenefitItem benefit={benefit} key={benefit.label} />
            ))}
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}

const BenefitItem = ({ benefit }: { benefit: Benefit }) => (
  <Stack>
    <Typography className={styles.benValue}>{benefit.value}</Typography>
    <Typography variant="subtitle1">{benefit.label}</Typography>
  </Stack>
);
