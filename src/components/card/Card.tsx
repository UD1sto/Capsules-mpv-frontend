import { Stack, StackProps, Typography } from "@mui/material";
import styles from "./styles.module.css";

interface ICardProps extends StackProps {
  title?: string;
  children?: React.ReactNode;
  noContent?: string;
}

export function Card(props: ICardProps) {
  const { title, children, noContent, ...restProps } = props || {};
  return (
    <Stack className={`${styles.cardBox} ${props?.className}`} {...restProps}>
      {title && (
        <Typography variant="h3" mb="20px">
          {title}
        </Typography>
      )}
      {children}
      {noContent && (
        <Typography  className={styles.noContent}>
          {noContent}
        </Typography>
      )}
    </Stack>
  );
}
