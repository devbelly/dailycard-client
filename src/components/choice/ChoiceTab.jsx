import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";

import { makeStyles } from "@material-ui/core";
import { useDeleteChoice } from "./hooks/useDeleteChoice";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    typography: "body1",
  },
}));

export default function ChoiceTab({ add, edit, delIdx }) {
  const classes = useStyles();
  const deleteChoice = useDeleteChoice();
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className={classes.container}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange}>
            <Tab label="Add" value="1" onClick={add} />
            <Tab
              label="Delete"
              value="2"
              onClick={() => {
                deleteChoice(delIdx);
              }}
            />
            <Tab label="Edit" value="3" onClick={edit} />
          </TabList>
        </Box>
      </TabContext>
    </Box>
  );
}
