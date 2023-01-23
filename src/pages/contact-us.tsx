import { ContactForm, SwapForm } from "@/components";
import { Stack, Typography, useMediaQuery } from "@mui/material";

export default function ContactUs() {
  const sm = useMediaQuery("(min-width:500px)");
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      minHeight="calc(100vh - 265px)"
    >
      <Typography variant="h2" mb={2.5} mt={sm?10:5} textAlign="center">
        Have any questions?
      </Typography>
      <Typography variant="subtitle1" textAlign="center">
        Reach to us for partnerships, investment proposals, feedback and
        suggestions.
        <br /> We always reply in 1-2 business days
      </Typography>
      <ContactForm />
    </Stack>
  );
}
