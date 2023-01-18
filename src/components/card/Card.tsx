import { Stack, StackProps, Typography } from "@mui/material";
import styles from "./styles.module.css";

interface CardProps extends StackProps {
  title?: string;
  children?: React.ReactNode;
}

export function Card(props: CardProps) {
  const { title, children, ...restProps } = props || {};
  return (
    <Stack className={styles.cardBox} {...restProps}>
      {title && <Typography variant="h3">{title}</Typography>}
      {children}
    </Stack>
  );
}
