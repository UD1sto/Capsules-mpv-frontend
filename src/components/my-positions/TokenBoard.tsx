import { Grid } from "@mui/material";
import { Card } from "../card/Card";
import { TokenCard, TokenCardItem } from "./TokenCard";

export interface TokenBoardProps {
  items: Array<TokenCardItem>;
  type: "borrow" | "supply" | "stack";
}
export function TokenBoard(props: TokenBoardProps) {
  const { items, type } = props;

  return (
    <Grid container spacing={2} columns={{ xs: 1, sm: 2 }} maxWidth={1170}>
      {items.map((item: TokenCardItem) => (
        <Grid item xs={1}>
          <Card sx={{ borderRadius: "25px" }}>
            <TokenCard type={type} {...item} />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
