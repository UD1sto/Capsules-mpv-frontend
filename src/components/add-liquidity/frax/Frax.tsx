import { Stack, Typography, useMediaQuery } from "@mui/material";

export function Frax() {
  return (
    <>
      <Stack direction="row">
        <Stack spacing={2} sx={{ flexGrow: 1, mr: 2 }}>
          <Typography variant="subtitle2">Status: Active</Typography>
          <Typography variant="subtitle2">Total locked: $953,081.07</Typography>
          <Typography variant="subtitle2">Daily volume: $523.5</Typography>
          <Typography variant="subtitle2">Fee: 0.04%</Typography>
          <Typography variant="subtitle2">Virtual price: 1.01094</Typography>
        </Stack>
        <Stack spacing={2} sx={{ flexGrow: 1 }}>
          <Typography variant="subtitle2">Status: Active</Typography>
          <Typography variant="subtitle2">Total locked: $953,081.07</Typography>
          <Typography variant="subtitle2">Daily volume: $523.5</Typography>
          <Typography variant="subtitle2">Fee: 0.04%</Typography>
          <Typography variant="subtitle2">Virtual price: 1.01094</Typography>
        </Stack>
      </Stack>

      <Typography variant="h3" mt="50px">
        FRAX-USDC-BP
      </Typography>

      <Typography variant="subtitle2" sx={{ mt: "20px", mb: "30px" }}>
        $953,081.07 in total
      </Typography>
      <Stack direction="row" mb={5} flexWrap="wrap">
        <TokenItem />
        <TokenItem />
      </Stack>
      <Typography variant="subtitle2" mb={2}>
        Pool address:0xC69D...EAD6
      </Typography>
      <Typography variant="subtitle2">
        LP token address:0xd48c...726A
      </Typography>
    </>
  );
}

export const TokenItem = () => {
  const sm = useMediaQuery("(min-width:500px)");

  return (
    <Stack direction="row" spacing={2} sx={{ flexGrow: 1, mt: !sm ? 2 : 0 }}>
      <img src="/images/bnc.png" style={{ width: "30px", height: "30px" }}  alt="token"/>
      <Stack>
        <Typography mb="18px">Ethereum</Typography>
        <Typography>290,801,74</Typography>
      </Stack>
      <Typography>30.47%</Typography>
    </Stack>
  );
};
