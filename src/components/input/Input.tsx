import { StandardTextFieldProps } from "@material-ui/core";
import { InputAdornment, TextField } from "@mui/material";

export interface InputProps extends StandardTextFieldProps {
  icon?: JSX.Element;
  endBox?: JSX.Element;
}

export function Input(props: InputProps) {
  const {
    icon,
    variant,
    placeholder,
    fullWidth,
    multiline,
    endBox,
    type,
    ...restProps
  } = props;

  switch (variant) {
    case "standard":
      return (
        <TextField
          placeholder={placeholder}
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
          fullWidth={fullWidth}
          multiline={multiline}
          type={type}
        />
      );
    default:
      return (
        <TextField
          placeholder={placeholder}
          fullWidth={fullWidth}
          multiline={multiline}
          type={type}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "25px",
              background: (theme) => theme.palette.background.default,
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
              <InputAdornment position="end">{endBox}</InputAdornment>
            ),
          }}
        />
      );
  }
}
