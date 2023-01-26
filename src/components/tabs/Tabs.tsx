import * as React from "react";
import Tabs from "@mui/material/Tabs";
import ITab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useMediaQuery } from "@material-ui/core";

interface ITabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  key: string;
}

interface ITab {
  label: string;
  component: React.ReactNode;
}
interface ITabsProps {
  tabs: Array<ITab>;
}

function TabPanel(props: ITabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3, pb: 5 }}>{children}</Box>}
    </Box>
  );
}

export function TabsPanel({ tabs }: ITabsProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const xs = useMediaQuery("(min-width:770px)");

  return (
    <Box>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="tabs"
          textColor="secondary"
          centered={!xs}
        >
          {tabs.map((tab, index) => (
            <ITab label={tab.label} {...a11yProps(index)} key={tab.label} />
          ))}
        </Tabs>
      </Box>
      {tabs.map((tab, index) => (
        <TabPanel value={value} index={index} key={tab.label}>
          {tab.component}
        </TabPanel>
      ))}
    </Box>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
