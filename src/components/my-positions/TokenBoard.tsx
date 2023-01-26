import { Grid } from "@mui/material";
import { Card } from "../card/Card";
import { TokenCard, ITokenCardItem } from "./TokenCard";

export interface ITokenBoardProps {
  items: Array<ITokenCardItem>;
  type: "borrow" | "supply" | "stack";
}
export function TokenBoard(props: ITokenBoardProps) {
  const { items, type } = props;

  return (
    <Grid container spacing={2} columns={{ xs: 1, sm: 2 }} maxWidth={1170}>
      {items.map((item: ITokenCardItem) => (
        <Grid item xs={1} key={item.token}>
          <Card sx={{ borderRadius: "25px" }}>
            <TokenCard type={type} {...item} />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
