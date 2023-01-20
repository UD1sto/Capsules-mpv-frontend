import { Typography } from "@mui/material";
import { Close } from "public/icons";
import { Card } from "../card/Card";

export interface FaqItemProps {
  title: string;
  description: string;
}

export function FaqItem({ title, description }: FaqItemProps) {
  return (
    <Card
      sx={{
        position: "relative",
        ":hover": {
          backgroundColor: "rgba(60, 60, 60, 0.4)",
          cursor: "pointer",
        },
      }}
    >
      <Close style={{ position: "absolute", top: "20px", right: "20px" }} />
      <Typography textTransform="uppercase" mb={1} fontSize="1.25rem">
        {title}
      </Typography>
      <Typography
        sx={{ maxHeight: "42px", overflow: "hidden", display: "inline-block" }}
        variant="subtitle2"
      >
        {description}
      </Typography>
    </Card>
  );
}
