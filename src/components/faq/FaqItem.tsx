import { Typography, useMediaQuery } from "@mui/material";
import { Card } from "../card/Card";
import styles from "./styles.module.css";

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
      id={styles.box}
    >
      <CloseIcon />
      <Typography className={styles.title}>{title}</Typography>
      <Typography className={styles.desc} variant="subtitle2">
        {description}
      </Typography>
    </Card>
  );
}

const CloseIcon = () => {
  const md = useMediaQuery("(min-width:800px)");

  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.icon}
    >
      <path
        d="M1 14.3333V21M1 21H7.66667M1 21L11 11M21 1V7.66667M21 1H14.3333M21 1L11 11M11 11L21 21M21 21H14.3333M21 21V14.3333M21 21L1 1M1 1V7.66667M1 1H7.66667"
        stroke={md ? "#C9C9D3" : "#5864FF"}
        stroke-width="1.5"
      />
    </svg>
  );
};
