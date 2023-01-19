import { Button, Stack, Typography } from "@mui/material";
import { Card } from "../card/Card";
import styles from "./styles.module.css";

export interface PoolItem {
  title: string;
  date: string;
  icon1: string;
  icon2: string;
  tvl: string;
  volume: string;
  balance: string;
}

export interface PoolItemProps {
  poolItem: PoolItem;
}

const style = {
  mb: 0.5,
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "row",
  flexWrap: { xs: "wrap", md: "no-wrap" },
  zIndex: 200,
  p:{ sm:"12px 30px!important",xs:"25px 20px!important"},
  ":hover": {
    backgroundColor: "rgba(60, 60, 60, 0.4)",
    transition: "0.3s",
  },
};

export function PoolItem(props: PoolItemProps) {
  const { title, date, icon1, icon2, tvl, volume, balance } =
    props?.poolItem || {};

  return (
    <Card sx={style}>
      <Stack className={styles.titleBox}>
        <Typography>{title}</Typography>
        <Typography variant="subtitle1">{date}</Typography>
      </Stack>
      <Stack direction="row" className={styles.iconBox} spacing={1}>
        <img src={icon1} alt="icon" />
        <img src={icon2} alt="icon" />
      </Stack>
      <Stack spacing={6} direction="row" className={styles.descBox}>
        <Stack>
          <Typography variant="subtitle1">TVL</Typography>
          <Typography>{tvl}</Typography>
        </Stack>
        <Stack>
          <Typography variant="subtitle1">24h Vol.</Typography>
          <Typography>{volume}</Typography>
        </Stack>
        <Stack>
          <Typography variant="subtitle1">Balance</Typography>
          <Typography>{balance}</Typography>
        </Stack>
      </Stack>
      <Stack
        className={styles.btnBox}
        spacing={1}
      >
        <Button variant="contained">Borrow</Button>
        <Button variant="outlined">Replay</Button>
      </Stack>
    </Card>
  );
}
