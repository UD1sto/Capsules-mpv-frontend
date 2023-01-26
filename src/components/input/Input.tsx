import {
  InputAdornment,
  Stack,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";

export interface InputProps {
  icon?: JSX.Element;
  endBox?: { box: JSX.Element; fixed?: boolean };
  variant?: "standard";
  input?: TextFieldProps;
  label?: string;
  subtitle?: string;
}

export function Input(props: InputProps) {
  const { icon, variant, endBox, label, input } = props || {};

  switch (variant) {
    case "standard":
      return (
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">{icon}</InputAdornment>
            ),
          }}
          sx={{
            flex: 1,
            "& .MuiInput-input": {
              py: "13px",
              fontSize: "0.87rem",
            },
          }}
          variant="standard"
          {...input}
        />
      );
    default:
      return (
        <Stack>
          {label && (
            <Typography variant="subtitle1" sx={{ mb: 1, color: "white" }}>
              {label}
            </Typography>
          )}
          <TextField
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "25px",
                background: (theme) => theme.palette.background.default,
                p: !endBox?.fixed ? "0 8px" : "4px 20px",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderRadius: "25px",
                border: 0,
                outline: 0,
                p: "14px 20px",
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">{endBox?.box}</InputAdornment>
              ),
              startAdornment: (
                <InputAdornment position="start">{icon}</InputAdornment>
              ),
            }}
            {...input}
          />
        </Stack>
      );
  }
}
