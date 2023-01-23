import { SwapForm } from "@/components";
import { Stack } from "@mui/material";

export default function Swap() {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      height="calc(100vh - 265px)"
    >
      <SwapForm />
    </Stack>
  );
}
