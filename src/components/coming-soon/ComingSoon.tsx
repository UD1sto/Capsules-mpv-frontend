import { Stack, Typography } from "@mui/material";
import styles from "./styles.module.css";

export function ComingSoon() {
  return (
    <Stack
      className={styles.comingSoonSection}
      sx={{ background: (theme) => theme.palette.primary.main }}
    >
      <img src="/icons/capsula.svg" alt="" />
      
      <Stack className={styles.comingSoonBox}>
        <Typography variant="h2">Coming soon</Typography>
        <Typography className={styles.comingSoonDesc}>
          <span> Liquid loans: </span>
          Use your saddle liquidity to get stablecoin loans at insane rations,
          liquidation is impossible and you still earn with your collateralized
          liquidity.
          <br />
          <span> Money capsules: </span>
          Automated p2p monetary agreements and reduced gas fees for token
          transactions
        </Typography>
        <Typography className={styles.testnet}>Try on testnet</Typography>
      </Stack>
    </Stack>
  );
}
