import { TabsPanel, TokenCard } from "@/components";

export default function MyPositions() {
  return (
    <>
      <TabsPanel
        tabs={[
          {
            label: "My supply",
            component: (
              <TokenCard
                date="Oct 10 - Dec 15"
                token="Ruby1010/1215"
                type="supply"
                values={["0.3413 SOL", "15.81%", "0.2661 SOL"]}
              />
            ),
          },
          {
            label: "My borrow",
            component: (
              <TokenCard
                type="borrow"
                date="Oct 10 - Dec 15"
                token="Ruby1010/1215"
                value="1,093,272.08 USDC"
                values={["0.3413 SOL", "15.81%", "0.2661 SOL"]}
              />
            ),
          },
          {
            label: "My stack",
            component: (
              <TokenCard
                type="stack"
                date="Oct 10 - Dec 15"
                token="Ruby1010/1215"
                value="1,093,272.08 USDC"
                values={["05/12/2022", "03/06/2023", "0.0045 LARIX"]}
              />
            ),
          },
        ]}
      />
    </>
  );
}
