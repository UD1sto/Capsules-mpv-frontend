import { Button, Container, Stack } from "@mui/material";
import { Logo } from "../logo/Logo";
import styles from "./styles.module.css";

export function HomeMenu() {
  return (
    <Stack
      sx={{
        position: "absolute",
        width: "100%",
        top: 0,
        zIndex: 100,
      }}
    >
      <Container maxWidth="xl">
        <Stack className={styles.container}>
          <Logo />
          <Button variant="contained">Enter app</Button>
        </Stack>
      </Container>
    </Stack>
  );
}
