import { Card, Input } from "@/components";
import { Button, Stack, Typography } from "@mui/material";

export default function Stake() {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      minHeight="calc(100vh - 265px)"
      mt={"70px"}
    >
      <Typography variant="h3">Stake to earn</Typography>
      <Typography
        variant="subtitle1"
        sx={{ mt: 2, mb: 5, maxWidth: 450, textAlign: "center" }}
      >
        Stake your tokens to earn rewards, select a lock date option to multiply
        your rewards.
      </Typography>
      <Card sx={{ maxWidth: 570, borderRadius: "25px" }}>
        <Input
          placeholder="Amount"
          type="number"
          endBox={
            <Button
              sx={{ p: 1, backgroundColor: "#14141491" }}
              variant="contained"
            >
              MAX
            </Button>
          }
        />
        <Button variant="contained" sx={{ mt: 2.2 }}>
          Connect wallet
        </Button>
        <Stack spacing={2} mt={6}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="subtitle1">You will receive</Typography>
            <Typography variant="subtitle1">0 stETH</Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="subtitle1">Exchange rate</Typography>
            <Typography variant="subtitle1">1 ETH = 1 stETH</Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="subtitle1">Transaction cost</Typography>
            <Typography variant="subtitle1">$2.32</Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="subtitle1">Reward fee</Typography>
            <Typography variant="subtitle1">10%</Typography>
          </Stack>
        </Stack>
      </Card>
      <Card
        sx={{ maxWidth: 570, borderRadius: "25px", mt: 4 }}
        spacing={2}
        title="Lido statistics"
      >
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="subtitle1">Annual percentage rate</Typography>
          <Typography variant="subtitle1">5.4%</Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="subtitle1">Total staked with Lido</Typography>
          <Typography variant="subtitle1">4,706,540.856 ETH</Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="subtitle1">Stakers</Typography>
          <Typography variant="subtitle1">123814</Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="subtitle1">stETH market cap</Typography>
          <Typography variant="subtitle1">$5,539,188,020</Typography>
        </Stack>
      </Card>
    </Stack>
  );
}
