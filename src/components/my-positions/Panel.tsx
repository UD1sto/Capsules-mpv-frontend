import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import { Card } from "../card/Card";
import { Stack, Typography, useMediaQuery } from "@mui/material";
import { ArrowDownIcon, UnionIcon } from "public/icons";
import { EllipseRatio } from "../ellipse-ratio/EllipseRatio";
import styles from "./styles.module.css";
import { TOTAL_LABELS } from "@/content";
import { HeaderPanel } from "./HeaderPanel";

export function Panel() {
  const md = useMediaQuery("(min-width:1190px)");
  const sm = useMediaQuery("(max-width:755px)");

  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 1170, mt: 4 }}>
      {sm && (
        <Box>
          <HeaderPanel hidden fullWidth />

          <Collapse in={!checked}>
            <Card sx={{ borderRadius: "15px", mt: "20px" }}>
              <Stack alignItems="center">
                <EllipseRatio value={34} sx={{ height: 180, width: 180 }} />
              </Stack>
              {TOTAL_LABELS.map((label: string) => {
                return (
                  <Stack py="20px" borderBottom="1px solid gray">
                    <Typography variant="subtitle2">{label}</Typography>
                    <Typography>$0.00</Typography>
                  </Stack>
                );
              })}
            </Card>
          </Collapse>
        </Box>
      )}
      {!sm && (
        <Box>
          {md && (
            <Collapse in={checked && md}>
              <HeaderPanel />
            </Collapse>
          )}
          {!md && <HeaderPanel />}
          <Collapse in={!checked}>
            <Stack
              direction={md ? "row" : "column"}
              spacing={2}
              mt={!md ? "20px" : 0}
            >
              {md && <HeaderPanel hidden={md} />}

              <Card
                sx={{ borderRadius: "15px", width: 830 }}
                spacing={2}
                direction="row"
                alignItems="center"
              >
                <Stack className={styles.ratioBox}>
                  <Stack spacing={5} className={styles.box1}>
                    <TextItem label="Supply Balance" />
                    <TextItem label="Net Value" />
                  </Stack>

                  <Stack className={styles.box2}>
                    <UnionIcon/>
                    <EllipseRatio
                      sx={{ position: "absolute", left: "175px", top: "-90px" }}
                      value={20}
                    />
                  </Stack>

                  <Stack spacing={5} width="118px" className={styles.box3}>
                    <TextItem label="Borrow Balance" />
                    <TextItem label="Net APR" />
                  </Stack>
                </Stack>

                <Stack spacing={5} className={styles.borrowLimit}>
                  <TextItem label="Borrow Limit" />
                  <TextItem label=" Liquidation Threshold" />
                </Stack>
              </Card>
            </Stack>
          </Collapse>
        </Box>
      )}
      <Stack onClick={handleChange} className={styles.switch}>
        <Typography>{checked ? "Show" : "Hide"} panel</Typography>
        <ArrowDownIcon
          style={!checked ? { transform: "rotate(180deg)" } : {}}
        />
      </Stack>
    </Box>
  );
}

export const TextItem = ({ label }: { label: string }) => {
  return (
    <Stack>
      <Typography variant="subtitle1">{label}</Typography>
      <Typography sx={{ fontSize: "1.25rem" }}>$0.00</Typography>
    </Stack>
  );
};
