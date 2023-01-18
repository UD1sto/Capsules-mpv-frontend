import { Button, Stack, Typography } from "@mui/material";
import { Card } from "../card/Card";

export function PoolItem() {
  return (
    <Card
      sx={{
        mb: 0.5,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        ":hover": {
          backgroundColor: "rgba(60, 60, 60, 0.4)",
          transition: "0.3s",
          cursor: "pointer",
        },
      }}
    >
      <Stack>
        <Typography> Ruby1010/1215</Typography>
        <Typography>Oct 10 - Dec 15</Typography>
      </Stack>
      <Stack direction="row">
        <img src="/images/bnb.png" alt="" style={{ width: "35px" }} />
        <img src="/images/bnc.png" alt="" style={{ width: "30px" }} />
      </Stack>
      <Stack direction="row">
        <Stack>
          <Typography>TVL</Typography>
          <Typography>$18.5m</Typography>
        </Stack>
        <Stack>
          <Typography>24h Vol.</Typography>
          <Typography>$0.0</Typography>
        </Stack>
        <Stack>
          <Typography>Balance</Typography>
          <Typography>100</Typography>
        </Stack>
      </Stack>
      <Stack>
        <Button
          variant="contained"
          sx={{ mb: 1, fontSize: "14px", width: "140px", height: "40px" }}
        >
          Borrow
        </Button>
        <Button
          variant="outlined"
          sx={{ fontSize: "14px", width: "140px", height: "40px" }}
        >
          Replay
        </Button>
      </Stack>
    </Card>
  );
}
