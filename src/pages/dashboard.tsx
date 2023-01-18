import { TabsPanel } from "@/components";
import { PoolItem } from "@/components/pool-item/PoolItem";
import { Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";

export default function Dashboard() {
  return (
    <Container maxWidth="xl">
      <Stack alignItems="center" mb={15}>
        <Typography variant="h2" m="50px 0 20px">
          Dashboard
        </Typography>
        <Typography variant="subtitle1" textAlign="center">
          Select between borrowing against your LP position or against a
          standard token. <br />
          <span style={{ fontWeight: 700 }}>Note:</span> Only stablecoin pools
          are supported
        </Typography>
        <Stack sx={{ width: "100%", maxWidth: 1200, mt: 9 }}>
 
          <TabsPanel />
        </Stack>
      </Stack>
    </Container>
  );
}
