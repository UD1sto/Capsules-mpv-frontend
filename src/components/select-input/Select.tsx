import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { ArrowDownIcon } from "public/icons";
import { InputBase, Stack, styled, Typography } from "@mui/material";
import styles from "./styles.module.css";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    borderRadius: "50px",
    position: "relative",
    backgroundColor: theme.palette.background.default,
    border: 0,
    fontSize: 24,
    padding: "10px 20px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontFamily: "Jura",
    "&:focus": {
      borderRadius: "50px",
    },
    "&.MuiSelect-select": {
      minHeight: "1rem",
    },
  },

  "& .MuiSelect-icon": {
    right: "20px",
    top: "calc(50% - 5px)",
    transition: "0.5s",
  },
}));

interface Option {
  label: string;
  value: string;
  img?: string;
}

interface SelectProps {
  options: Array<Option>;
  size?: string;
}

export function SelectInput({ options, size }: SelectProps) {
  const [age, setAge] = React.useState(options[0].value);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 50 }}>
      <FormControl>
        <Select
          IconComponent={ArrowDownIcon}
          value={age}
          onChange={handleChange}
          input={<BootstrapInput />}
          sx={{ borderRadius: "50px" }}
          defaultValue={options[0].value}
        >
          {options.map((item: Option) => (
            <Item item={item} size={size} />
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export function Item(props: { item: Option; size?: string }): JSX.Element {
  const { value, label, img } = props?.item || {};
  return (
    <MenuItem value={value} className={styles.menuItemBox} key={label}>
      <Stack className={styles.menuItem}>
        {img && <img src={img} alt="icon" />}
        <Typography variant="h3" marginRight="25px" fontSize={props?.size}>
          {label}
        </Typography>
      </Stack>
    </MenuItem>
  );
}
