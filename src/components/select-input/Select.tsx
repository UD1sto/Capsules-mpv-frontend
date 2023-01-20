import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { ArrowDownIcon } from "public/icons";
import {
  InputBase,
  Stack,
  styled,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { SELECT_ITEMS } from "@/content";

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
  },
  "& .MuiSelect-icon": {
    right: "20px",
    top: "calc(50% - 5px)",
    transition: "0.5s",
  },
}));

export function SelectInput() {
  const [age, setAge] = React.useState(SELECT_ITEMS[0].value);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const md = useMediaQuery("(min-width:500px)");

  return (
    <Box sx={{ minWidth: 200 }}>
      <FormControl>
        {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
        <Select
          IconComponent={ArrowDownIcon}
          labelId="select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
          input={<BootstrapInput />}
          sx={{ borderRadius: "50px" }}
          defaultValue={SELECT_ITEMS[0].value}
        >
          {SELECT_ITEMS.map((item) => (
            <MenuItem
              value={item.value}
              sx={{
                padding: "15px 20px",
              }}
            >
              <Stack direction="row" alignItems="center">
                <img
                  src="/images/bnc.png"
                  alt="icon"
                  style={{ width: "27px", marginRight: "13px", height: "27px" }}
                />
                <Typography variant="h3" marginRight="25px">
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
