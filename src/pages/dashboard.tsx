import { BorrowLP, BorrowTokens, TabsPanel } from "@/components";
import { Stack, Typography } from "@mui/material";

export default function Dashboard() {
  return (
    <>
      <Stack alignItems="center">
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
          <TabsPanel
            tabs={[
              {
                label: "Borrow using LP",
                component: <BorrowLP />,
              },
              {
                label: "Borrow using Crypto tockens",
                component: <BorrowTokens />,
              },
            ]}
          />
        </Stack>
      </Stack>
    </>
  );
}
