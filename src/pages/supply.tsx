import { SupplyForm } from "@/components";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function Supply() {
  return (
    <Stack justifyContent="center" alignItems="center" mt="70px">
      <Typography variant="h3">Supply to earn</Typography>
      <Typography
        variant="subtitle1"
        sx={{ mt: 2, mb: 5, maxWidth: 570, textAlign: "center" }}
      >
        By supplying stablecoin liquidity to the protocol you help us maintain
        the oUSD price peg. Read the <Link href="#">docs</Link> for more
        information
      </Typography>
      <SupplyForm />
    </Stack>
  );
}
