import { Button, Stack, Switch, Typography } from "@mui/material";
import { Card } from "../card/Card";
import { CapsuleSwitch } from "../switch/Switch";

export interface TokenCardProps {
  type: "supply" | "borrow" | "stack";
  values: Array<string>;
  date: string;
  token: string;
  value?: string;
}
export function TokenCard(props: TokenCardProps) {
  const { type, values, date, token, value } = props || {};
  const titles = getTitles(type);
  const btnTitles = getBtnTitles(type);

  return (
    <Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Stack spacing={1}>
          <Typography>{token}</Typography>
          <Typography variant="subtitle2">{date}</Typography>
        </Stack>
        {getSideBarItem(type, value)}
      </Stack>

      <Stack spacing={2} my={4}>
        {titles.map((title, i) => {
          return (
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="subtitle1">{title}</Typography>
              <Typography variant="subtitle1">{values?.[i]}</Typography>
            </Stack>
          );
        })}
      </Stack>

      <Stack direction="row">
        <Button variant="contained" sx={{ flex: 1, mr: 2.2 }}>
          {btnTitles[0]}
        </Button>
        <Button variant="outlined" sx={{ flex: 1 }}>
          {btnTitles[1]}
        </Button>
      </Stack>
    </Stack>
  );
}

const getTitles = (type: "supply" | "borrow" | "stack") => {
  switch (type) {
    case "supply":
      return ["Supply Balance", "Supply APR", "Wallet"];
    case "borrow":
      return ["Borrow Balance", "Borrow APR", "Wallet"];
    case "stack":
      return ["Locked Date", "Unlocking Time", "Raydium Reward"];
    default:
      return ["Locked Date", "Unlocking Time", "Raydium Reward"];
  }
};

const getBtnTitles = (type: "supply" | "borrow" | "stack") => {
  switch (type) {
    case "supply":
      return ["Supply", "Withdraw"];
    case "borrow":
      return ["Claim", "Unlocking"];
    case "stack":
      return ["Claim", "Unlocking"];
    default:
      return ["Claim", "Unlocking"];
  }
};

const getSideBarItem = (
  type: "supply" | "borrow" | "stack",
  value?: string
) => {
  switch (type) {
    case "supply":
      return <CapsuleSwitch label="Collateral" />;
    case "borrow":
      return (
        <Stack spacing={1} alignItems="end">
          <Typography>{value}</Typography>
          <Typography variant="subtitle1">Liquidity</Typography>
        </Stack>
      );
    case "stack":
      return (
        <Stack spacing={1} alignItems="end">
          <Typography>{value}</Typography>
          <Typography variant="subtitle1">Amount</Typography>
        </Stack>
      );
    default:
      return <></>;
  }
};
