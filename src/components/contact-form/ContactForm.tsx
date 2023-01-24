import { Box, Button, Stack, useMediaQuery } from "@mui/material";
import { EmailIcon, TextIcon, UserIcon } from "public/icons";
import { Input } from "../input/Input";

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
        <Input
          icon={<UserIcon />}
          variant="standard"
          input={{ placeholder: "Your name ..." }}
        />
        <Input
          icon={<EmailIcon />}
          variant="standard"
          input={{ placeholder: "Your email ...", type: "email" }}
        />
      </Stack>

      <Box>
        <Input
          icon={<TextIcon />}
          variant="standard"
          input={{
            placeholder: "Your text ...",
            type: "email",
            multiline: true,
            fullWidth: true,
          }}
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
