import { Box, Stack, SxProps, Theme, Typography } from "@mui/material";
import { EllipseIcon } from "public/icons";
import styles from "./styles.module.css";

export interface EllipseVariant {
  ellipse: "primary" | "secondary" | "info" | undefined;
  border: string;
}

export interface EllipseRatioProps {
  sx?: SxProps<Theme>;
  value: number;
}
const getEllipseVariant = (value: number): EllipseVariant => {
  if (value < 24) return { ellipse: "primary", border: "#5864FF" };
  if (value < 49) return { ellipse: "secondary", border: "#915CFF" };
  if (value < 74) return { ellipse: "info", border: "#AFA309" };
  return { ellipse: undefined, border: "#E16C21" };
};

export function EllipseRatio({ sx, value }: EllipseRatioProps) {
  const { ellipse, border } = getEllipseVariant(value);

  return (
    <Box sx={{ position: "relative", ...sx }}>
      <EllipseIcon variant={ellipse} className={styles.icon} />
      <Stack className={styles.box} sx={{ border: `2px solid ${border}` }}>
        <Typography variant="subtitle1" color="white">
          Borrow ratio
        </Typography>
        <Typography>{value}%</Typography>
      </Stack>
    </Box>
  );
}
