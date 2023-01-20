import { Button, Stack, Typography } from "@mui/material";

export function SwapForm() {
  return (
    <Stack spacing={2.2}>
      <Stack
        sx={{
          backgroundColor: (theme) => theme.palette.background.default,
          p: "15px 20px",
          flexDirection: "row",
          alignItems: "center",
          borderRadius: "25px",
        }}
      >
        <img src="/images/bnc.png" style={{ width: "30px", height: "30px" }} />
        <Typography m="0 10px">Ethereum</Typography>
      </Stack>
      <Stack
        sx={{
          backgroundColor: (theme) => theme.palette.background.default,
          p: "15px 20px",
          flexDirection: "row",
          alignItems: "center",
          borderRadius: "25px",
        }}
      >
        <img src="/images/bnc.png" style={{ width: "30px", height: "30px" }} />
        <Typography m="0 10px">Ethereum</Typography>
      </Stack>
      <Typography variant="subtitle1">Bonus: 00.00%</Typography>
      <Button variant="contained">Connect wallet</Button>
    </Stack>
  );
}
