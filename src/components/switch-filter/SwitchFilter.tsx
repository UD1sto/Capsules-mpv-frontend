import { Button, Stack } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./styles.module.css";

interface IFilter {
  query: string;
  label: string;
}

interface ISwitchFilterProps {
  filters: Array<IFilter>;
}

export function SwitchFilter(props: ISwitchFilterProps) {
  const router = useRouter();

  const changeFilter = (query: string) => {
    router.replace(`?filter=${query}`);
  };

  const isCurrentFilter = (query: string) => {
    return router.query?.filter === query;
  };

  return (
    <Stack className={styles.switchBox}>
      {props?.filters?.map((filter) => (
        <Button
          variant={isCurrentFilter(filter.query) ? "contained" : "text"}
          onClick={() => changeFilter(filter.query)}
          key={filter.label}
          sx={{
            ...(!isCurrentFilter(filter.query) && {
              backgroundColor: {
                xs: "rgba(88, 100, 255, 0.08)",
                sm: "transparent",
              },
            }),
          }}
        >
          {filter.label}
        </Button>
      ))}
    </Stack>
  );
}
