import {
  Box,
  Button,
  InputAdornment,
  Stack,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { EmailIcon, TextIcon, UserIcon } from "public/icons";

const style = {
  flex: 1,
  "& .MuiInput-input": {
    py: "13px",
    fontSize: "0.87rem",
  },
};

export function ContactForm() {
  const sm = useMediaQuery("(min-width:500px)");
  return (
    <Stack
      spacing={sm ? 8 : 4}
      sx={{
        my: sm ? 9 : 6,
        maxWidth: 930,
        width: "100%",
      }}
    >
      <Stack direction={sm ? "row" : "column"} spacing={sm ? 2 : 4}>
        <TextField
          placeholder="Your name ..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <UserIcon />
              </InputAdornment>
            ),
          }}
          sx={style}
          variant="standard"
        />
        <TextField
          placeholder="Your email ..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
          sx={style}
        />
      </Stack>

      <Box>
        <TextField
          fullWidth
          placeholder="Your text ..."
          multiline
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <TextIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
          sx={style}
        />
      </Box>
      <Stack alignItems={"center"}>
        <Button
          variant={sm ? "outlined" : "contained"}
          sx={{ maxWidth: "fit-content" }}
        >
          Send message
        </Button>
      </Stack>
    </Stack>
  );
}
