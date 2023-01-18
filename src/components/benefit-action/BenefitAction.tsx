import { Button, Stack, Typography } from "@mui/material";
import styles from "./styles.module.css";

interface BenefitsActionProps {
  action: {
    image: string;
    maxWidth: number;
    maxContentWidth: number;
    label: string;
    description: string;
  };
  index: number;
}
export function BenefitAction(props: BenefitsActionProps) {
  const { action, index } = props;

  return (
    <Stack className={styles.actionBlock} direction={getDirection(index)}>
      <img
        src={action.image}
        alt=""
        style={{
          maxWidth: action.maxWidth,
        }}
        className={styles.deskImg}
      />
      <Stack sx={{ maxWidth: action.maxContentWidth }}>
        <Typography variant="h2">{action.label}</Typography>
        <img src={action.image} alt="" className={styles.mobImg}/>
        <Typography variant="subtitle1" padding="20px 0 40px">
          {action.description}
        </Typography>
        <Button variant="contained">Learn more</Button>
      </Stack>
    </Stack>
  );
}

const getDirection = (i: number) => (i % 2 === 0 ? "row" : "row-reverse");
