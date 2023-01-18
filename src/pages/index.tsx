import styles from "@/styles/Home.module.css";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { BenefitAction, Benefits, ComingSoon, Alert } from "@/components";
import { BasicLayout } from "@/layouts/BasicLayout";
import { useState } from "react";

const ACTIONS = [
  {
    image: "/images/Supply.png",
    label: "Supply to earn",
    description:
      "Stakers are rewarded for providing liquidity to the protocol with 70% of the SDL fees",
    link: "",
    maxWidth: 590,
    maxContentWidth: 490,
  },
  {
    image: "/images/Pools.png",
    label: "Borrow with SDL as collateral",
    description:
      "You can now borrow using SDL as collateral, a large collection of tokens are available for loaning",
    link: "",
    maxWidth: 770,
    maxContentWidth: 570,
  },
  {
    image: "/images/Panel.png",
    label: "Earn IMBA",
    description:
      "Imba is our native token, it is used as both a governance and a utility token and has a 2,000,000 max supply limit.",
    link: "",
    maxWidth: 770,
    maxContentWidth: 490,
  },
  {
    image: "/images/Stack.png",
    label: "Lock imba to multiply your rewards",
    description: "By locking your IMBA you will receive rewards weekly.",
    link: "",
    maxWidth: 590,
    maxContentWidth: 670,
  },
];

export default function Home() {

  const [opened, setOpened] = useState(true);

  return (
    <BasicLayout>
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
        <Benefits />
        <Alert
          title="Increase your LP positions by 80%."
          opened={opened}
          setOpened={setOpened}
          actionTitle="Learn how"
          handleAction={() => console.log(2)}
        />
        <Container maxWidth="xl">
          {ACTIONS.map((action, index) => (
            <BenefitAction action={action} index={index} />
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
    </BasicLayout>
  );
}
