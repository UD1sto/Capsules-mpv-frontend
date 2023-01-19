import { Stack, SxProps, Theme, Typography } from "@mui/material";
import Link from "next/link";
import styles from "./styles.module.css";

export function Logo(props: { sx?: SxProps<Theme> }) {
  return (
    <Link href="/">
      <Stack className={styles.logoBox} {...props}>
        <img src="/icons/logo.svg" alt="logo" className={styles.logoImg} />
        <Typography>Capsula</Typography>
      </Stack>
    </Link>
  );
}
