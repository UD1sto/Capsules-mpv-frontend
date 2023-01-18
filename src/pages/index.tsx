import styles from "@/styles/Home.module.css";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { BenefitAction, Benefits, ComingSoon, Alert } from "@/components";
import { useState } from "react";
import { ACTIONS, BENEFITS } from "@/content";

export default function Home() {
  const [opened, setOpened] = useState(true);

  return (
    <Stack className={styles.main}>
      <Container maxWidth="xl">
        <Stack className={styles.headContainer}>
          <Stack className={styles.headerBox}>
            <Stack className={styles.head}>
              <Typography variant="h1">
                Unlock the full potential of your liquidity positions
              </Typography>
              <Typography variant="subtitle1">
                Earn more from your stablecoin LP positions
              </Typography>
              <Stack direction="row">
                <Button variant="contained">Enter app</Button>
                <Button variant="outlined">Documentation</Button>
              </Stack>
            </Stack>

            <Stack className={styles.collab}>
              <Typography className={styles.collabHead}>
                In collaboration with:
              </Typography>
              <Stack>
                <img src="/images/saddle-logo.png" alt="" />
                <Typography>Saddle</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>

      <Benefits benefits={BENEFITS} />

      <Alert
        title="Increase your LP positions by 80%."
        opened={opened}
        setOpened={setOpened}
        actionTitle="Learn how"
        handleAction={() => console.log(2)}
      />

      <Container maxWidth="xl">
        {ACTIONS.map((action, index) => (
          <BenefitAction action={action} index={index} key={action.label} />
        ))}

        <ComingSoon />
      </Container>

      <Box className={styles.lightBox}></Box>
      <Box className={styles.lightBox2}></Box>
      <Box className={styles.lightBox3}></Box>
      <Box className={styles.lightBox4}></Box>
      <Box className={styles.circle1}></Box>
      <Box className={styles.circle2}></Box>
      <Box className={styles.circle3}></Box>
      <Box className={styles.circle4}></Box>
    </Stack>
  );
}
