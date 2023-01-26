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

interface IOption {
  label: string;
  value: string;
  img?: string;
}

interface ISelectProps {
  options: Array<IOption>;
  size?: string;
}

export function SelectInput({ options, size }: ISelectProps) {
  const [value, setValue] = React.useState(options[0].value);

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 50 }}>
      <FormControl>
        <Select
          IconComponent={ArrowDownIcon}
          value={value}
          onChange={handleChange}
          input={<BootstrapInput />}
          sx={{ borderRadius: "50px" }}
          defaultValue={options[0].value}
        >
          {options.map((item: IOption) => (
            <MenuItem
              value={item.value}
              className={styles.menuItemBox}
              key={item.label}
            >

              <Stack className={styles.menuItem}>
                {item.img && <img src={item.img} alt="icon" />}
                <Typography variant="h3" marginRight="25px" fontSize={{xs:size}}>
                  {item.label}
                </Typography>
              </Stack>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
