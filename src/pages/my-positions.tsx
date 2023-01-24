import { Card, TabsPanel, TokenCard } from "@/components";
import { Stack } from "@mui/material";

export default function MyPositions() {
  const style = {
    maxWidth: 570,
    borderRadius: "25px",
    width: "100%",
    flexGrow: 1,
    mb: "30px",
  };
  return (
    <Stack alignItems="center">
      <TabsPanel
        tabs={[
          {
            label: "My supply",
            component: (
              <Stack
                direction={"row"}
                flexWrap="wrap"
                justifyContent="space-between"
                maxWidth={1170}
              >
                <Card sx={style}>
                  <TokenCard
                    date="Oct 10 - Dec 15"
                    token="Ruby1010/1215"
                    type="supply"
                    values={["0.3413 SOL", "15.81%", "0.2661 SOL"]}
                  />
                </Card>
                <Card sx={style}>
                  <TokenCard
                    date="Oct 10 - Dec 15"
                    token="Ruby1010/1215"
                    type="supply"
                    values={["0.3413 SOL", "15.81%", "0.2661 SOL"]}
                  />
                </Card>
                <Card sx={style}>
                  <TokenCard
                    date="Oct 10 - Dec 15"
                    token="Ruby1010/1215"
                    type="supply"
                    values={["0.3413 SOL", "15.81%", "0.2661 SOL"]}
                  />
                </Card>
                <Card sx={style}>
                  <TokenCard
                    date="Oct 10 - Dec 15"
                    token="Ruby1010/1215"
                    type="supply"
                    values={["0.3413 SOL", "15.81%", "0.2661 SOL"]}
                  />
                </Card>
              </Stack>
            ),
          },
          {
            label: "My borrow",
            component: (
              <Stack
                direction={"row"}
                flexWrap="wrap"
                justifyContent="space-between"
                maxWidth={1170}
              >
                <Card sx={style}>
                  <TokenCard
                    type="borrow"
                    date="Oct 10 - Dec 15"
                    token="Ruby1010/1215"
                    value="1,093,272.08 USDC"
                    values={["0.3413 SOL", "15.81%", "0.2661 SOL"]}
                  />
                </Card>
                <Card sx={style}>
                  <TokenCard
                    type="borrow"
                    date="Oct 10 - Dec 15"
                    token="Ruby1010/1215"
                    value="1,093,272.08 USDC"
                    values={["0.3413 SOL", "15.81%", "0.2661 SOL"]}
                  />
                </Card>
                <Card sx={style}>
                  <TokenCard
                    type="borrow"
                    date="Oct 10 - Dec 15"
                    token="Ruby1010/1215"
                    value="1,093,272.08 USDC"
                    values={["0.3413 SOL", "15.81%", "0.2661 SOL"]}
                  />
                </Card>
                <Card sx={style}>
                  <TokenCard
                    type="borrow"
                    date="Oct 10 - Dec 15"
                    token="Ruby1010/1215"
                    value="1,093,272.08 USDC"
                    values={["0.3413 SOL", "15.81%", "0.2661 SOL"]}
                  />
                </Card>
              </Stack>
            ),
          },
          {
            label: "My stack",
            component: (
              <Stack
                direction={"row"}
                flexWrap="wrap"
                justifyContent="space-between"
                maxWidth={1170}
              >
                <Card sx={style}>
                  <TokenCard
                    type="stack"
                    date="Oct 10 - Dec 15"
                    token="Ruby1010/1215"
                    value="1,093,272.08 USDC"
                    values={["05/12/2022", "03/06/2023", "0.0045 LARIX"]}
                  />
                </Card>
                <Card sx={style}>
                  <TokenCard
                    type="stack"
                    date="Oct 10 - Dec 15"
                    token="Ruby1010/1215"
                    value="1,093,272.08 USDC"
                    values={["05/12/2022", "03/06/2023", "0.0045 LARIX"]}
                  />
                </Card>
                <Card sx={style}>
                  <TokenCard
                    type="stack"
                    date="Oct 10 - Dec 15"
                    token="Ruby1010/1215"
                    value="1,093,272.08 USDC"
                    values={["05/12/2022", "03/06/2023", "0.0045 LARIX"]}
                  />
                </Card>
                <Card sx={style}>
                  <TokenCard
                    type="stack"
                    date="Oct 10 - Dec 15"
                    token="Ruby1010/1215"
                    value="1,093,272.08 USDC"
                    values={["05/12/2022", "03/06/2023", "0.0045 LARIX"]}
                  />
                </Card>
              </Stack>
            ),
          },
        ]}
      />
    </Stack>
  );
}
