import { Stack, Typography, Container } from "@mui/material";
import styles from "./styles.module.css";

export interface IBenefit {
  value?: string;
  label?: string;
}

export interface IBenefitsProps {
  benefits: Array<IBenefit>;
}

export function Benefits(props: IBenefitsProps) {
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

const BenefitItem = ({ benefit }: { benefit: IBenefit }) => (
  <Stack>
    <Typography className={styles.benValue}>{benefit.value}</Typography>
    <Typography variant="subtitle1">{benefit.label}</Typography>
  </Stack>
);
