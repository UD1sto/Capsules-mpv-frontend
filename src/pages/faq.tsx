import { BasicModal, FaqItem, FaqItemProps } from "@/components";
import { Grid, Stack, Typography } from "@mui/material";
import { FAQ as FAQitems } from "@/content";
import { useState } from "react";

export default function FAQ() {
  const [open, setOpen] = useState<boolean>(false);
  const [currentItem, setCurrentItem] = useState<null | FaqItemProps>(null);

  const openModal = (item: FaqItemProps) => {
    setOpen(true);
    setCurrentItem(item);
  };

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
          <Grid item xs={1} key={item.title} onClick={() => openModal(item)}>
            <FaqItem {...item} />
          </Grid>
        ))}
      </Grid>
      
      <BasicModal open={open} setOpen={setOpen}>
        <Typography variant="h3" mb="30px">
          {currentItem?.title}
        </Typography>
        <Typography variant="subtitle1"> {currentItem?.description}</Typography>
      </BasicModal>
    </Stack>
  );
}
