import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { Card } from "../card/Card";
import { Input } from "../input/Input";
import styles from "./styles.module.css";

export function SupplyForm() {
  return (
    <Card sx={{ borderRadius: "25px", maxWidth: 570 }} spacing={4}>
      <Input
        endBox={{
          box: <EndBoxInput />,
          fixed: true,
        }}
        label="Amount"
        input={{}}
      />
      <Input
        endBox={{
          box: <EndBox />,
          fixed: true,
        }}
        icon={<EndBox title />}
        input={{ disabled: true }}
        label="Transaction"
        subtitle="ffff"
      />
      <Button variant="contained">Connect wallet</Button>
    </Card>
  );
}

export const EndBoxInput = () => {
  return (
    <Stack>
      <Stack className={styles.iconBox}>
        <Image src="/images/bnc.png" alt="token" width={25} height={25} />
        <Typography>ETH</Typography>
      </Stack>
      <Typography variant="subtitle2" fontSize="12px">
        Balance 7.32 MAX
      </Typography>
    </Stack>
  );
};

export const EndBox = ({ title }: { title?: boolean }) => {
  return (
    <Stack alignItems={title ? "start" : "end"}>
      <Typography variant="subtitle2" fontSize="12px" mb="5px">
        {title ? "Supply APY" : "19.79%"}
      </Typography>
      <Typography variant="subtitle2" fontSize="12px">
        {title ? "Collateralization" : "Enabled"}
      </Typography>
    </Stack>
  );
};
