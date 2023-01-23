import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { ArrowDownIcon } from "public/icons";
import { InputBase, Stack, styled, Typography } from "@mui/material";

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

export function SelectInput({ options, size }) {
  const [age, setAge] = React.useState(options[0].value);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 50 }}>
      <FormControl>
        <Select
          IconComponent={ArrowDownIcon}
          labelId="select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
          input={<BootstrapInput />}
          sx={{ borderRadius: "50px" }}
          defaultValue={options[0].value}
        >
          {options.map((item) => (
            <MenuItem
              value={item.value}
              sx={{
                padding: "15px 20px",
              }}
              key={item.label}
            >
              <Stack direction="row" alignItems="center">
                <img
                  src="/images/bnc.png"
                  alt="icon"
                  style={{ width: "27px", marginRight: "13px", height: "27px" }}
                />
                <Typography variant="h3" marginRight="25px" fontSize={size}>
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
