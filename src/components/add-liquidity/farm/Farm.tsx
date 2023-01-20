import { Button, Stack, Typography, useMediaQuery } from "@mui/material";

export function Farm() {
  const sm = useMediaQuery("(min-width:500px)");
  return (
    <Stack
      direction={sm ? "row" : "column"}
      justifyContent="space-between"
      my="15px"
    >
      <Stack>
        <Typography>LP Available</Typography>
        <Typography mb="20px" variant="subtitle2">
          0.0
        </Typography>
        <Typography>LP Staked</Typography>
        <Typography variant="subtitle2">0.0</Typography>
      </Stack>
      <Stack
        direction={!sm ? "row" : "column"}
        mt={sm ? 0 : 2}
        justifyContent={!sm ? "center" : "flex-start"}
      >
        <Button variant="contained" sx={{ mb: sm ? 1 : 0, width: "140px" }}>
          Stake all
        </Button>
        <Button variant="outlined" sx={{ ml: sm ? 0 : 1, width: "140px" }}>
          Unstake all
        </Button>
      </Stack>
    </Stack>
  );
}
