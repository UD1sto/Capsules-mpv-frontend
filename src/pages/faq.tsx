import { FaqItem, FaqItemProps } from "@/components";
import { Grid, Stack, Typography } from "@mui/material";
import { FAQ as FAQitems } from "@/content";

export default function FAQ() {
  return (
    <Stack mt="50px">
      <Typography variant="h2" textAlign="center">
        FAQ
      </Typography>
      <Grid
        container
        columns={{ xs: 1, md: 2, xl: 3 }}
        spacing={4}
        mt={{ xs: "20px", sm: "40px" }}
      >
        {FAQitems.map((item: FaqItemProps) => (
          <Grid item xs={1}>
            <FaqItem {...item} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
