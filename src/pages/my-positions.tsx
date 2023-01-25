import { TabsPanel } from "@/components";
import { Panel, TokenBoard } from "@/components/my-positions";
import { STACK_CARDS, SUPLLY_CARDS } from "@/content";
import { Stack } from "@mui/material";

export default function MyPositions() {
  return (
    <Stack alignItems="center">
      <Panel />
      <TabsPanel
        tabs={[
          {
            label: "My supply",
            component: <TokenBoard type="supply" items={SUPLLY_CARDS} />,
          },
          {
            label: "My borrow",
            component: <TokenBoard type="borrow" items={SUPLLY_CARDS} />,
          },
          {
            label: "My stack",
            component: <TokenBoard type="stack" items={STACK_CARDS} />,
          },
        ]}
      />
    </Stack>
  );
}
