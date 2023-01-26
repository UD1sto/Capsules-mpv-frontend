import { Card } from "../card/Card";
import { Stack, Typography } from "@mui/material";
import styles from "./styles.module.css";
import { MARKETS_LABELS, MARKETS_VALUES } from "@/content";

interface IHeaderPanelProps {
  hidden?: boolean;
  fullWidth?: boolean;
}
export function HeaderPanel(props: IHeaderPanelProps) {
  const { hidden, fullWidth } = props;
  
  return (
    <Card
      sx={{
        borderRadius: "15px",
        maxWidth: hidden && !fullWidth ? 330 : "none",
      }}
      spacing={2}
      direction={hidden ? "column" : "row"}
      justifyContent={hidden ? "" : "space-around"}
    >
      {MARKETS_LABELS.map((label: string, index) => (
        <Stack
          spacing={1}
          direction={hidden ? "column" : "row"}
          alignItems={!hidden ? "center" : ""}
          key={label}
        >
          <Typography variant="subtitle1" className={styles.label}>
            {label}
          </Typography>
          <Typography className={styles.value}>
            {MARKETS_VALUES[index]}
          </Typography>
        </Stack>
      ))}
    </Card>
  );
}
