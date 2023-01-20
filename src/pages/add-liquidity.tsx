import { Card, Farm, Frax } from "@/components";
import { SwapForm } from "@/components";
import { Stack, useMediaQuery } from "@mui/material";

export default function AddLiquidity() {
  const md = useMediaQuery("(min-width:800px)");

  const style = {
    card: { borderRadius: "25px", height: "fit-content", minWidth: 300 },
    box: { flexGrow: 1, maxWidth: md ? 570 : "none", width: "100%" },
  };

  return (
    <Stack
      spacing={3}
      direction={md ? "row" : "column"}
      justifyContent="center"
      mt={md ? "100px" : "70px"}
      alignItems={md ? "flex-start" : "center"}
    >
      <Stack sx={style.box}>
        <Card title="Add liquidity" sx={style.card}>
          <SwapForm />
        </Card>
      </Stack>

      <Stack spacing={3} sx={style.box}>
        <Card title="My Gauge Farm" sx={style.card}>
          <Farm />
        </Card>

        <Card title="FRAX-USDC-BP" sx={style.card}>
          <Frax />
        </Card>
      </Stack>
    </Stack>
  );
}
