import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider"}}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
      <Link to="/">
          <Tab label="Кухни" {...a11yProps(0)} />
       </Link>
          <Tab label="Гостинные" {...a11yProps(1)} />
          <Tab label="Спальни" {...a11yProps(2)} />
          <Tab label="Прихожие" {...a11yProps(3)} />
          <Tab label="Шкафы-купе" {...a11yProps(4)} />
          <Tab label="Детские" {...a11yProps(5)} />
          <Tab label="Диваны" {...a11yProps(6)} />
          <Tab label="Столы и стулья" {...a11yProps(7)} />
        </Tabs>
      </Box>
    </Box>
  );
}
